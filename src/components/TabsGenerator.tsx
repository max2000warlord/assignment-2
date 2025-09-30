'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

interface Tab {
  id: string
  label: string
  content: string
}

export default function TabsGenerator() {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: '1', label: 'Tab 1', content: 'Content for tab 1' },
    { id: '2', label: 'Tab 2', content: 'Content for tab 2' }
  ])
  const [generatedCode, setGeneratedCode] = useState('')

  const addTab = () => {
    const newTab = {
      id: Date.now().toString(),
      label: `Tab ${tabs.length + 1}`,
      content: `Content for tab ${tabs.length + 1}`
    }
    setTabs([...tabs, newTab])
  }

  const removeTab = (id: string) => {
    setTabs(tabs.filter(tab => tab.id !== id))
  }

  const updateTab = (id: string, field: 'label' | 'content', value: string) => {
    setTabs(tabs.map(tab =>
      tab.id === id ? { ...tab, [field]: value } : tab
    ))
  }

  const generateCode = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Tabs</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: #f0f0f0;
        }
        .tabs-container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .tab-buttons {
            display: flex;
            background: #e0e0e0;
            border-radius: 8px 8px 0 0;
            overflow: hidden;
        }
        .tab-button {
            flex: 1;
            padding: 15px;
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s;
        }
        .tab-button:hover {
            background: #d0d0d0;
        }
        .tab-button.active {
            background: white;
            font-weight: bold;
        }
        .tab-content {
            padding: 20px;
            min-height: 200px;
        }
        .tab-panel {
            display: none;
        }
        .tab-panel.active {
            display: block;
            animation: fadeIn 0.3s;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
</head>
<body>
    <div class="tabs-container">
        <div class="tab-buttons">
            ${tabs.map((tab, index) =>
      `<button class="tab-button${index === 0 ? ' active' : ''}" data-tab="${index}">${tab.label}</button>`
    ).join('\n            ')}
        </div>
        <div class="tab-content">
            ${tabs.map((tab, index) =>
      `<div class="tab-panel${index === 0 ? ' active' : ''}" data-panel="${index}">${tab.content}</div>`
    ).join('\n            ')}
        </div>
    </div>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('.tab-button');
            const panels = document.querySelectorAll('.tab-panel');
            
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    const tabIndex = this.getAttribute('data-tab');
                    
                    // Remove active class from all buttons and panels
                    buttons.forEach(btn => btn.classList.remove('active'));
                    panels.forEach(panel => panel.classList.remove('active'));
                    
                    // Add active class to clicked button and corresponding panel
                    this.classList.add('active');
                    document.querySelector('[data-panel="' + tabIndex + '"]').classList.add('active');
                });
            });
        });
    </script>
</body>
</html>`

    setGeneratedCode(html)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode)
    alert('Code copied to clipboard!')
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tabs Generator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Configuration Panel */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Configure Tabs</h2>

          {tabs.map(tab => (
            <div key={tab.id} className="border p-4 rounded-lg space-y-2">
              <input
                type="text"
                value={tab.label}
                onChange={(e) => updateTab(tab.id, 'label', e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Tab label"
              />
              <textarea
                value={tab.content}
                onChange={(e) => updateTab(tab.id, 'content', e.target.value)}
                className="w-full p-2 border rounded"
                rows={3}
                placeholder="Tab content"
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeTab(tab.id)}
                disabled={tabs.length <= 1}
              >
                Remove Tab
              </Button>
            </div>
          ))}

          <Button onClick={addTab} className="w-full">Add New Tab</Button>
          <Button onClick={generateCode} variant="default" className="w-full">
            Generate HTML Code
          </Button>
        </div>

        {/* Generated Code Display */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Generated Code</h2>
            {generatedCode && (
              <Button onClick={copyCode} size="sm">Copy Code</Button>
            )}
          </div>

          {generatedCode && (
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">{generatedCode}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  )
}
