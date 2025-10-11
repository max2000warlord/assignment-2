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
            color: oklch(0.75 0.2 195);
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
            border: 2px solid oklch(0.75 0.2 195);
            box-shadow: 0 0 20px oklch(0.75 0.2 195 / 0.3);
        }
        h1 {
            text-align: center;
            color: oklch(0.7 0.3 340);
            text-shadow: 0 0 10px oklch(0.7 0.3 340);
            margin-bottom: 20px;
        }
        .code-block {
            background: #000;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid oklch(0.75 0.2 195);
            margin: 10px 0;
            white-space: pre-wrap;
            overflow-x: auto;
        }
        .student-info {
            position: fixed;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.9);
            padding: 15px;
            border-radius: 10px;
            border: 2px solid oklch(0.7 0.3 340);
            color: oklch(0.7 0.3 340);
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0 0 15px oklch(0.7 0.3 340 / 0.5);
            z-index: 1000;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚪 Escape Room - Completed Challenges</h1>
        <p>Successfully completed ${completedStages.length} out of ${stages.length} coding challenges!</p>
        
        <div class="code-block">${completedCode}</div>
        
        <p style="text-align: center; margin-top: 20px; color: oklch(0.7 0.3 340);">
            Generated on 2025-10-06 14:39:26 UTC
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
    <div className="min-h-screen relative">
      {/* WebM Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(0.4) contrast(1.2)',
        }}
      >
        <source src="/extract.webm" type="video/webm" />
      </video>


      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-8" style={{ paddingTop: '140px' }}>
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            background: 'linear-gradient(90deg, var(--neon-pink), var(--neon-purple), var(--neon-cyan))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 20px var(--neon-pink)) drop-shadow(0 0 40px var(--neon-cyan))',
            fontFamily: 'monospace'
          }}
        >
          🚪 CODE ESCAPE ROOM
        </h1>

        {/* Timer */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            padding: '20px',
            background: 'rgba(0, 0, 0, 0.8)',
            borderRadius: '15px',
            border: '2px solid var(--neon-cyan)',
            boxShadow: '0 0 30px oklch(0.75 0.2 195 / 0.3)'
          }}
        >
          <div
            style={{
              fontSize: '2.5rem',
              color: timeRemaining < 120 ? 'var(--neon-pink)' : 'var(--neon-cyan)',
              marginBottom: '1rem',
              fontFamily: 'monospace',
              textShadow: `0 0 10px ${timeRemaining < 120 ? 'var(--neon-pink)' : 'var(--neon-cyan)'}`,
              fontWeight: 'bold'
            }}
          >
            ⏱️ Time: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
          </div>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              disabled={isCompleted || timeRemaining === 0}
              style={{
                padding: '12px 24px',
                background: isTimerRunning ? 'var(--neon-pink)' : 'var(--neon-cyan)',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: `0 0 15px ${isTimerRunning ? 'oklch(0.7 0.3 340 / 0.5)' : 'oklch(0.75 0.2 195 / 0.5)'}`,
                transition: 'all 0.3s ease'
              }}
            >
              {isTimerRunning ? '⏸️ Pause' : '▶️ Start'} Timer
            </button>
            <button
              onClick={resetTimer}
              style={{
                padding: '12px 24px',
                background: 'var(--neon-orange)',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 0 15px oklch(0.75 0.25 45 / 0.5)',
                transition: 'all 0.3s ease'
              }}
            >
              🔄 Reset
            </button>
          </div>
        </div>

        {!isCompleted ? (
          /* Current Stage */
          <Card
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '30px',
              background: 'rgba(0, 0, 0, 0.9)',
              color: 'var(--neon-cyan)',
              borderRadius: '15px',
              border: '2px solid var(--neon-cyan)',
              boxShadow: '0 0 30px oklch(0.75 0.2 195 / 0.3)'
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: 'var(--neon-pink)',
                textShadow: '0 0 10px var(--neon-pink)',
                fontFamily: 'monospace'
              }}
            >
              Stage {currentStage}/{stages.length}: {stages[currentStage - 1]?.title}
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--neon-cyan)' }}>
              {stages[currentStage - 1]?.description}
            </p>

            <div
              style={{
                marginBottom: '1.5rem',
                padding: '15px',
                background: 'rgba(22, 33, 62, 0.5)',
                border: '1px solid var(--neon-purple)',
                borderRadius: '8px',
                color: 'var(--neon-purple)'
              }}
            >
              💡 <strong>Hint:</strong> {stages[currentStage - 1]?.hint}
            </div>

            {/* Code editor area */}
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              style={{
                width: '100%',
                height: '300px',
                padding: '15px',
                background: '#000',
                color: 'var(--neon-cyan)',
                fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                fontSize: '14px',
                border: '2px solid var(--neon-cyan)',
                borderRadius: '8px',
                resize: 'vertical',
                outline: 'none'
              }}
              placeholder="Write your code here..."
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
              <button
                onClick={checkSolution}
                disabled={!isTimerRunning || timeRemaining === 0}
                style={{
                  padding: '15px 30px',
                  background: 'var(--neon-cyan)',
                  color: '#000',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 0 15px oklch(0.75 0.2 195 / 0.5)',
                  transition: 'all 0.3s ease'
                }}
              >
                🚀 Submit Solution
              </button>

              {feedback && (
                <div
                  style={{
                    padding: '12px 20px',
                    borderRadius: '8px',
                    border: `2px solid ${feedback.includes('Correct') || feedback.includes('Congratulations')
                      ? 'var(--neon-cyan)'
                      : feedback.includes('copied')
                        ? 'var(--neon-purple)'
                        : 'var(--neon-pink)'
                      }`,
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: feedback.includes('Correct') || feedback.includes('Congratulations')
                      ? 'var(--neon-cyan)'
                      : feedback.includes('copied')
                        ? 'var(--neon-purple)'
                        : 'var(--neon-pink)',
                    boxShadow: `0 0 15px ${feedback.includes('Correct') || feedback.includes('Congratulations')
                      ? 'oklch(0.75 0.2 195 / 0.5)'
                      : feedback.includes('copied')
                        ? 'oklch(0.65 0.28 290 / 0.5)'
                        : 'oklch(0.7 0.3 340 / 0.5)'
                      }`
                  }}
                >
                  {feedback}
                </div>
              )}
            </div>

            {/* Progress */}
            <div style={{ marginTop: '25px' }}>
              <div style={{ marginBottom: '10px', color: 'var(--neon-cyan)', fontSize: '16px' }}>
                Progress: {completedStages.length}/{stages.length} stages completed
              </div>
              <div
                style={{
                  width: '100%',
                  height: '12px',
                  background: '#333',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid var(--neon-purple)'
                }}
              >
                <div
                  style={{
                    width: `${(completedStages.length / stages.length) * 100}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-pink))',
                    transition: 'width 0.5s ease',
                    boxShadow: '0 0 10px var(--neon-cyan)'
                  }}
                />
              </div>
            </div>
          </Card>
        ) : (
          /* Completion Screen */
          <Card
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '40px',
              background: 'rgba(0, 0, 0, 0.9)',
              textAlign: 'center',
              borderRadius: '15px',
              border: '2px solid var(--neon-cyan)',
              boxShadow: '0 0 30px oklch(0.75 0.2 195 / 0.5)'
            }}
          >
            <h2
              style={{
                fontSize: '3.5rem',
                color: 'var(--neon-cyan)',
                textShadow: '0 0 20px var(--neon-cyan)',
                marginBottom: '1.5rem',
                fontFamily: 'monospace'
              }}
            >
              🎉 FREEDOM ACHIEVED! 🎉
            </h2>
            <p style={{ fontSize: '1.8rem', color: 'var(--neon-pink)', marginBottom: '2rem' }}>
              You've successfully completed all coding challenges and escaped the room!
            </p>
            <div
              style={{
                background: 'rgba(22, 33, 62, 0.5)',
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid var(--neon-cyan)',
                color: 'var(--neon-cyan)'
              }}
            >
              <strong>Final Stats:</strong><br />
              Time Used: {Math.floor((600 - timeRemaining) / 60)}:{((600 - timeRemaining) % 60).toString().padStart(2, '0')}<br />
              Stages Completed: {completedStages.length}/{stages.length}<br />
              Success Rate: 100%
            </div>
          </Card>
        )}

        {/* Generated HTML Output */}
        <Card
          style={{
            maxWidth: '1000px',
            margin: '30px auto 0',
            padding: '25px',
            background: 'rgba(0, 0, 0, 0.9)',
            borderRadius: '15px',
            border: '2px solid var(--neon-pink)',
            boxShadow: '0 0 30px oklch(0.7 0.3 340 / 0.3)'
          }}
        >
          <h3
            style={{
              fontSize: '1.8rem',
              marginBottom: '15px',
              color: 'var(--neon-pink)',
              textShadow: '0 0 10px var(--neon-pink)',
              fontFamily: 'monospace'
            }}
          >
            📝 Generated HTML + JS Code:
          </h3>
          <p style={{ marginBottom: '15px', color: 'var(--neon-cyan)', fontSize: '16px' }}>
            Copy this code and paste it into a .html file to run independently:
          </p>
          <textarea
            readOnly
            value={generateHTML()}
            style={{
              width: '100%',
              height: '200px',
              padding: '15px',
              background: '#111',
              color: 'var(--neon-cyan)',
              fontFamily: 'Monaco, Consolas, "Courier New", monospace',
              fontSize: '12px',
              border: '1px solid var(--neon-pink)',
              borderRadius: '5px',
              resize: 'vertical'
            }}
          />
          <button
            onClick={copyToClipboard}
            style={{
              marginTop: '15px',
              padding: '12px 24px',
              background: 'var(--neon-pink)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 0 15px oklch(0.7 0.3 340 / 0.5)',
              transition: 'all 0.3s ease'
            }}
          >
            📋 Copy to Clipboard
          </button>
        </Card>
      </div>
    </div>
  )
} 
