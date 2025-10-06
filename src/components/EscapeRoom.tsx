"use client"

import React, { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"

interface Stage {
  id: number
  title: string
  description: string
  code: string
  solution: string
  hint: string
}

export default function EscapeRoom() {
  const [currentStage, setCurrentStage] = useState(1)
  const [timeRemaining, setTimeRemaining] = useState(600) // 10 minutes
  const [userCode, setUserCode] = useState('')
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const [completedStages, setCompletedStages] = useState<number[]>([])

  // Timer logic
  useEffect(() => {
    if (isTimerRunning && timeRemaining > 0 && !isCompleted) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeRemaining === 0) {
      setIsTimerRunning(false)
      setFeedback("⏰ Time's up! The escape room is locked forever...")
    }
  }, [isTimerRunning, timeRemaining, isCompleted])

  const stages: Stage[] = [
    {
      id: 1,
      title: "Format Code Correctly",
      description: "Fix the indentation and syntax of this JavaScript code:",
      code: `function hello(){
console.log("Hello World")
}`,
      solution: `function hello() {
  console.log("Hello World");
}`,
      hint: "Add proper spacing, indentation, and semicolons"
    },
    {
      id: 2,
      title: "Debug the Code",
      description: "Find and fix the bug in this function that should calculate the area of a rectangle:",
      code: `function calculateArea(width, height) {
  let area = width * heigth;
  return area;
}`,
      solution: `function calculateArea(width, height) {
  let area = width * height;
  return area;
}`,
      hint: "Check the spelling of variable names"
    },
    {
      id: 3,
      title: "Generate Numbers 0 to 1000",
      description: "Write code to generate all numbers from 0 to 1000 and store them in an array:",
      code: `// Write your code here
let numbers = [];`,
      solution: `let numbers = [];
for (let i = 0; i <= 1000; i++) {
  numbers.push(i);
}`,
      hint: "Use a for loop to iterate from 0 to 1000"
    },
    {
      id: 4,
      title: "Data Format Conversion",
      description: "Convert this JSON data to CSV format:",
      code: `const data = [
  {name: "John", age: 25, city: "Melbourne"},
  {name: "Jane", age: 30, city: "Sydney"}
];
// Convert to CSV format`,
      solution: `const data = [
  {name: "John", age: 25, city: "Melbourne"},
  {name: "Jane", age: 30, city: "Sydney"}
];

let csv = "name,age,city\\n";
for (let person of data) {
  csv += person.name + "," + person.age + "," + person.city + "\\n";
}`,
      hint: "Create a header row, then iterate through the data to build CSV rows"
    }
  ]

  // Initialize user code when stage changes
  useEffect(() => {
    if (stages[currentStage - 1]) {
      setUserCode(stages[currentStage - 1].code)
      setFeedback('')
    }
  }, [currentStage])

  const checkSolution = () => {
    const currentStageData = stages[currentStage - 1]
    if (!currentStageData) return

    // Normalize code for comparison (remove extra whitespace)
    const normalizeCode = (code: string) =>
      code.replace(/\s+/g, ' ').trim().toLowerCase()

    const userNormalized = normalizeCode(userCode)
    const solutionNormalized = normalizeCode(currentStageData.solution)

    if (userNormalized.includes(solutionNormalized) || userCode.includes(currentStageData.solution.trim())) {
      setFeedback("🎉 Correct! Moving to next stage...")
      setCompletedStages([...completedStages, currentStage])

      setTimeout(() => {
        if (currentStage < stages.length) {
          setCurrentStage(currentStage + 1)
        } else {
          setIsCompleted(true)
          setIsTimerRunning(false)
          setFeedback("🏆 Congratulations! You've escaped the room!")
        }
      }, 1500)
    } else {
      setFeedback("❌ Not quite right. Check the hint and try again!")
    }
  }

  const generateHTML = () => {
    const completedCode = completedStages.map(stageId => {
      const stage = stages[stageId - 1]
      return `// Stage ${stageId}: ${stage.title}\n${stage.solution}\n`
    }).join('\n')

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escape Room - Generated Code</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
            color: #00ff41;
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(0, 0, 0, 0.8);
            padding: 20px;
            border-radius: 10px;
            border: 2px solid #00ff41;
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
        }
        h1 {
            text-align: center;
            color: #ff0080;
            text-shadow: 0 0 10px #ff0080;
            margin-bottom: 20px;
        }
        .code-block {
            background: #000;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #00ff41;
            margin: 10px 0;
            white-space: pre-wrap;
            overflow-x: auto;
        }
        .student-info {
            position: fixed;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.9);
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #00ff41;
            color: #00ff41;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="student-info">
        Student: max2000warlord<br>
        Date: 2025-10-06<br>
        Assignment 2 - Escape Room
    </div>
    
    <div class="container">
        <h1>🚪 Escape Room - Completed Challenges</h1>
        <p>Successfully completed ${completedStages.length} out of ${stages.length} coding challenges!</p>
        
        <div class="code-block">${completedCode}</div>
        
        <p style="text-align: center; margin-top: 20px; color: #ff0080;">
            Generated on 2025-10-06 14:22:47 UTC
        </p>
    </div>

    <script>
        console.log("Escape Room Code Generated Successfully!");
        console.log("Completed stages: ${completedStages.length}/${stages.length}");
        
        document.addEventListener('DOMContentLoaded', function() {
            const codeBlocks = document.querySelectorAll('.code-block');
            codeBlocks.forEach(block => {
                block.addEventListener('click', function() {
                    this.style.background = this.style.background === 'rgb(0, 51, 0)' ? '#000' : '#003300';
                });
            });
        });
    </script>
</body>
</html>`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateHTML())
    setFeedback("📋 HTML code copied to clipboard!")
  }

  const resetTimer = () => {
    setTimeRemaining(600)
    setIsTimerRunning(false)
  }

  return (
    <div className="min-h-screen bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(22, 33, 62, 0.9), rgba(15, 52, 96, 0.9)), url("/escape-room-bg.jpg")'
    }}>
      <div className="absolute top-4 left-4 text-green-400 text-xl font-bold bg-black/80 p-3 rounded border-2 border-green-400">
        Student: max2000warlord<br />
        Date: 2025-10-06<br />
        Assignment 2 - Escape Room
      </div>

      <div className="container mx-auto px-4 py-8" style={{ paddingTop: '120px' }}>
        <h1 className="text-4xl font-bold text-center mb-8 text-pink-500" style={{
          textShadow: '0 0 20px #ff0080'
        }}>
          🚪 Code Escape Room
        </h1>

        {/* Timer */}
        <div className="text-center mb-8">
          <div className="text-3xl text-green-400 mb-4" style={{
            fontFamily: 'monospace',
            textShadow: '0 0 10px #00ff41'
          }}>
            ⏱️ Time: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              disabled={isCompleted || timeRemaining === 0}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black rounded font-bold shadow-lg"
              style={{ boxShadow: '0 0 15px rgba(0, 255, 65, 0.5)' }}
            >
              {isTimerRunning ? '⏸️ Pause' : '▶️ Start'} Timer
            </button>
            <button
              onClick={resetTimer}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black rounded font-bold"
            >
              🔄 Reset
            </button>
          </div>
        </div>

        {!isCompleted ? (
          /* Current Stage */
          <Card className="max-w-4xl mx-auto p-6 bg-black/90 text-green-400 border-2 border-green-400" style={{
            boxShadow: '0 0 30px rgba(0, 255, 65, 0.3)'
          }}>
            <h2 className="text-3xl mb-4 text-pink-500" style={{ textShadow: '0 0 10px #ff0080' }}>
              Stage {currentStage}/{stages.length}: {stages[currentStage - 1]?.title}
            </h2>
            <p className="mb-4 text-lg">{stages[currentStage - 1]?.description}</p>

            <div className="mb-4 p-3 bg-green-900/30 border border-green-400 rounded">
              💡 <strong>Hint:</strong> {stages[currentStage - 1]?.hint}
            </div>

            {/* Code editor area */}
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="w-full h-64 p-4 bg-black text-green-400 font-mono border-2 border-green-400 rounded"
              placeholder="Write your code here..."
              style={{ fontSize: '14px' }}
            />

            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={checkSolution}
                disabled={!isTimerRunning || timeRemaining === 0}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black rounded font-bold"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 65, 0.5)' }}
              >
                🚀 Submit Solution
              </button>

              {feedback && (
                <div className={`px-4 py-2 rounded border ${feedback.includes('Correct') || feedback.includes('Congratulations')
                    ? 'bg-green-900/50 border-green-400 text-green-400'
                    : feedback.includes('copied')
                      ? 'bg-blue-900/50 border-blue-400 text-blue-400'
                      : 'bg-red-900/50 border-red-400 text-red-400'
                  }`}>
                  {feedback}
                </div>
              )}
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="text-green-400 mb-2">
                Progress: {completedStages.length}/{stages.length} stages completed
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-400 to-pink-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(completedStages.length / stages.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </Card>
        ) : (
          /* Completion Screen */
          <Card className="max-w-4xl mx-auto p-8 bg-black/90 text-center border-2 border-green-400" style={{
            boxShadow: '0 0 30px rgba(0, 255, 65, 0.5)'
          }}>
            <h2 className="text-5xl text-green-400 mb-6" style={{ textShadow: '0 0 20px #00ff41' }}>
              🎉 FREEDOM ACHIEVED! 🎉
            </h2>
            <p className="text-2xl text-pink-500 mb-6">
              You've successfully completed all coding challenges and escaped the room!
            </p>
            <div className="bg-green-900/30 p-4 rounded border border-green-400 text-green-400">
              <strong>Final Stats:</strong><br />
              Time Used: {Math.floor((600 - timeRemaining) / 60)}:{((600 - timeRemaining) % 60).toString().padStart(2, '0')}<br />
              Stages Completed: {completedStages.length}/{stages.length}<br />
              Success Rate: 100%
            </div>
          </Card>
        )}

        {/* Generated HTML Output */}
        <Card className="max-w-4xl mx-auto mt-8 p-6 bg-black/90 border-2 border-pink-500" style={{
          boxShadow: '0 0 20px rgba(255, 0, 128, 0.3)'
        }}>
          <h3 className="text-2xl mb-4 text-pink-500" style={{ textShadow: '0 0 10px #ff0080' }}>
            📝 Generated HTML + JS Code:
          </h3>
          <p className="mb-4 text-green-400">
            Copy this code and paste it into a .html file to run independently:
          </p>
          <textarea
            readOnly
            value={generateHTML()}
            className="w-full h-40 p-4 bg-gray-900 text-green-400 font-mono text-sm border border-pink-500 rounded"
          />
          <button
            onClick={copyToClipboard}
            className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded font-bold"
            style={{ boxShadow: '0 0 15px rgba(255, 0, 128, 0.5)' }}
          >
            📋 Copy to Clipboard
          </button>
        </Card>
      </div>
    </div>
  )
}
