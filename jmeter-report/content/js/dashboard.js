/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 99.23076923076923, "KoPercent": 0.7692307692307693};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.8846153846153846, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "API Outputs-0"], "isController": false}, {"data": [0.7333333333333333, 500, 1500, "Homepage"], "isController": false}, {"data": [1.0, 500, 1500, "API Escape Room-0"], "isController": false}, {"data": [0.9166666666666666, 500, 1500, "API Escape Room-1"], "isController": false}, {"data": [0.9166666666666666, 500, 1500, "API Escape Room"], "isController": false}, {"data": [0.7833333333333333, 500, 1500, "Escape Room-1"], "isController": false}, {"data": [0.7833333333333333, 500, 1500, "Escape Room"], "isController": false}, {"data": [1.0, 500, 1500, "Escape Room-0"], "isController": false}, {"data": [1.0, 500, 1500, "Tabs Generator-0"], "isController": false}, {"data": [0.85, 500, 1500, "API Outputs"], "isController": false}, {"data": [0.8333333333333334, 500, 1500, "Tabs Generator"], "isController": false}, {"data": [0.8333333333333334, 500, 1500, "Tabs Generator-1"], "isController": false}, {"data": [0.85, 500, 1500, "API Outputs-1"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 390, 3, 0.7692307692307693, 320.80256410256413, 1, 2420, 177.0, 829.8000000000008, 1273.45, 2013.36, 39.553752535496955, 495.0724201318459, 6.783444789553753], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["API Outputs-0", 30, 0, 0.0, 4.433333333333334, 1, 12, 4.0, 8.900000000000002, 11.45, 12.0, 3.6913990402362495, 0.8110984219269103, 0.4686346437799926], "isController": false}, {"data": ["Homepage", 30, 1, 3.3333333333333335, 672.2999999999998, 71, 2420, 365.0, 2003.8, 2192.2999999999997, 2420.0, 3.1068765534382767, 91.87737870236123, 0.36105303697183094], "isController": false}, {"data": ["API Escape Room-0", 30, 0, 0.0, 16.700000000000006, 1, 314, 4.5, 24.700000000000028, 159.9999999999998, 314.0, 4.081632653061225, 0.9486607142857143, 0.5341198979591837], "isController": false}, {"data": ["API Escape Room-1", 30, 0, 0.0, 310.0333333333333, 7, 2010, 198.5, 786.400000000001, 2010.0, 2010.0, 4.259548487860287, 1.089845413886128, 0.5615615682237682], "isController": false}, {"data": ["API Escape Room", 30, 0, 0.0, 326.8, 8, 2013, 204.0, 1070.3000000000015, 2013.0, 2013.0, 4.077749082506457, 1.9910884191926057, 1.0712055695256217], "isController": false}, {"data": ["Escape Room-1", 30, 0, 0.0, 513.9999999999999, 90, 2017, 354.0, 962.9, 1983.45, 2017.0, 3.10077519379845, 96.86208010335916, 0.4148498062015504], "isController": false}, {"data": ["Escape Room", 30, 0, 0.0, 520.6999999999999, 94, 2026, 363.0, 965.0, 1989.1499999999999, 2026.0, 3.0998140111593306, 97.57068221740028, 0.8264152588344699], "isController": false}, {"data": ["Escape Room-0", 30, 0, 0.0, 6.666666666666666, 1, 33, 4.0, 16.300000000000015, 30.799999999999997, 33.0, 3.1289111389236544, 0.7455608573216521, 0.4155585106382979], "isController": false}, {"data": ["Tabs Generator-0", 30, 0, 0.0, 8.066666666666668, 1, 33, 3.0, 28.800000000000004, 31.349999999999998, 33.0, 3.222687721559781, 0.7962304624556881, 0.4374546809539156], "isController": false}, {"data": ["API Outputs", 30, 1, 3.3333333333333335, 380.0666666666666, 10, 2007, 192.5, 1071.9000000000005, 1636.2999999999995, 2007.0, 3.687315634218289, 2.2900486648844645, 0.9398333794247788], "isController": false}, {"data": ["Tabs Generator", 30, 0, 0.0, 521.5666666666666, 92, 1981, 362.0, 1077.0, 1592.1499999999996, 1981.0, 3.1914893617021276, 108.46316073803192, 0.8695561835106382], "isController": false}, {"data": ["Tabs Generator-1", 30, 0, 0.0, 513.4666666666667, 91, 1978, 359.0, 1049.8, 1590.2499999999995, 1978.0, 3.1918289179699966, 107.68609443158847, 0.43638285987871056], "isController": false}, {"data": ["API Outputs-1", 30, 1, 3.3333333333333335, 375.6333333333333, 9, 2005, 188.5, 1070.6000000000006, 1634.8499999999995, 2005.0, 3.688222276862552, 1.4802113428202606, 0.4718331233095648], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["500/Internal Server Error", 3, 100.0, 0.7692307692307693], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 390, 3, "500/Internal Server Error", 3, "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["Homepage", 30, 1, "500/Internal Server Error", 1, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["API Outputs", 30, 1, "500/Internal Server Error", 1, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["API Outputs-1", 30, 1, "500/Internal Server Error", 1, "", "", "", "", "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
