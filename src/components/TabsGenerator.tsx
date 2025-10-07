"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Tab {
  id: string
  label: string
  content: string
}

export default function TabsGenerator() {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: "1", label: "Tab 1", content: "Content for tab 1" },
    { id: "2", label: "Tab 2", content: "Content for tab 2" },
  ])
  const [generatedCode, setGeneratedCode] = useState("")
  const [showPreview, setShowPreview] = useState(false)
  const [activePreviewTab, setActivePreviewTab] = useState(0)

  const addTab = () => {
    const newTab = {
      id: Date.now().toString(),
      label: `Tab ${tabs.length + 1}`,
      content: `Content for tab ${tabs.length + 1}`,
    }
    setTabs([...tabs, newTab])
  }

  const removeTab = (id: string) => {
    setTabs(tabs.filter((tab) => tab.id !== id))
  }

  const updateTab = (id: string, field: "label" | "content", value: string) => {
    setTabs(tabs.map((tab) => (tab.id === id ? { ...tab, [field]: value } : tab)))
  }

  const generateCode = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Synthwave Tabs</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Courier New', monospace;
            padding: 20px;
            background: linear-gradient(180deg, #1a0033 0%, #0d001a 100%);
            min-height: 100vh;
        }
        .tabs-container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(13, 0, 26, 0.8);
            border-radius: 12px;
            border: 2px solid #00ffff;
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
        }
        .tab-buttons {
            display: flex;
            background: rgba(26, 0, 51, 0.6);
            border-radius: 10px 10px 0 0;
            overflow: hidden;
            border-bottom: 2px solid #ff00ff;
        }
        .tab-button {
            flex: 1;
            padding: 15px;
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 16px;
            font-family: 'Courier New', monospace;
            color: #00ffff;
            transition: all 0.3s;
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
        .tab-button:hover {
            background: rgba(255, 0, 255, 0.2);
            text-shadow: 0 0 20px rgba(255, 0, 255, 0.8);
        }
        .tab-button.active {
            background: rgba(255, 0, 255, 0.3);
            color: #ff00ff;
            font-weight: bold;
            text-shadow: 0 0 20px rgba(255, 0, 255, 1);
            border-bottom: 3px solid #ff00ff;
        }
        .tab-content {
            padding: 30px;
            min-height: 200px;
            color: #00ffff;
        }
        .tab-panel {
            display: none;
        }
        .tab-panel.active {
            display: block;
            animation: fadeIn 0.3s, glow 2s ease-in-out infinite;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
            0%, 100% { text-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
            50% { text-shadow: 0 0 20px rgba(0, 255, 255, 0.8); }
        }
    </style>
</head>
<body>
    <div class="tabs-container">
        <div class="tab-buttons">
            ${tabs
        .map(
          (tab, index) =>
            `<button class="tab-button${index === 0 ? " active" : ""}" data-tab="${index}">${tab.label}</button>`,
        )
        .join("\n            ")}
        </div>
        <div class="tab-content">
            ${tabs
        .map(
          (tab, index) =>
            `<div class="tab-panel${index === 0 ? " active" : ""}" data-panel="${index}">${tab.content}</div>`,
        )
        .join("\n            ")}
        </div>
    </div>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('.tab-button');
            const panels = document.querySelectorAll('.tab-panel');
            
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    const tabIndex = this.getAttribute('data-tab');
                    
                    buttons.forEach(btn => btn.classList.remove('active'));
                    panels.forEach(panel => panel.classList.remove('active'));
                    
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
    alert("Code copied to clipboard!")
  }

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0" />

      <div className="relative z-0">
        <main className="container mx-auto px-4 py-12">
          <h1
            className="text-4xl font-bold font-mono text-center mb-8"
            style={{
              color: "var(--neon-pink)",
              textShadow: "0 0 20px var(--neon-pink), 0 0 40px var(--neon-pink)",
            }}
          >
            TABS GENERATOR
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card
              className="p-6 border-2 space-y-4"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderColor: "var(--neon-cyan)",
                boxShadow: "0 0 15px var(--neon-cyan)",
              }}
            >
              <h2
                className="text-2xl font-semibold font-mono mb-4"
                style={{
                  color: "var(--neon-cyan)",
                  textShadow: "0 0 10px var(--neon-cyan)",
                }}
              >
                Configure Tabs
              </h2>

              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className="border-2  p-4 rounded-lg space-y-3 transition-all"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderColor: "var(--neon-magenta)",
                    boxShadow: "0 0 10px var(--neon-magenta)",
                  }}
                >
                  <input
                    type="text"
                    value={tab.label}
                    onChange={(e) => updateTab(tab.id, "label", e.target.value)}
                    className="w-full p-3 border-2 rounded backdrop-blur-sm focus:outline-none transition-all font-mono"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      borderColor: "var(--neon-cyan)",
                      color: "var(--neon-cyan)",
                    }}
                    placeholder="Tab label"
                  />
                  <textarea
                    value={tab.content}
                    onChange={(e) => updateTab(tab.id, "content", e.target.value)}
                    className="w-full p-3 border-2 rounded backdrop-blur-sm focus:outline-none transition-all resize-none"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      borderColor: "var(--neon-cyan)",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                    rows={3}
                    placeholder="Tab content"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeTab(tab.id)}
                    disabled={tabs.length <= 1}
                    className="border-2 transition-all"
                    style={{
                      backgroundColor: "rgba(220, 38, 38, 0.8)",
                      borderColor: "#ef4444",
                      boxShadow: "0 0 10px #ef4444",
                    }}
                  >
                    Remove Tab
                  </Button>
                </div>
              ))}

              <Button
                onClick={addTab}
                className="w-full border-2 transition-all font-bold"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderColor: "var(--neon-cyan)",
                  color: "var(--neon-cyan)",
                  boxShadow: "0 0 15px var(--neon-cyan)",
                }}
              >
                Add New Tab
              </Button>
              <Button
                onClick={() => setShowPreview(!showPreview)}
                variant="outline"
                className="w-full border-2 transition-all"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderColor: "var(--neon-magenta)",
                  color: "var(--neon-magenta)",
                  boxShadow: "0 0 15px var(--neon-magenta)",
                }}
              >
                {showPreview ? "Hide" : "Show"} Live Preview
              </Button>
              <Button
                onClick={generateCode}
                className="w-full border-2 transition-all font-bold"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderColor: "var(--neon-pink)",
                  color: "var(--neon-pink)",
                  boxShadow: "0 0 15px var(--neon-pink)",
                }}
              >
                Generate HTML Code
              </Button>
            </Card>

            <Card
              className="p-6 border-2 backdrop-blur-md space-y-4"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderColor: "var(--neon-pink)",
                boxShadow: "0 0 15px var(--neon-pink)",
              }}
            >
              <div className="flex justify-between items-center">
                <h2
                  className="text-2xl font-semibold font-mono"
                  style={{
                    color: "var(--neon-pink)",
                    textShadow: "0 0 10px var(--neon-pink)",
                  }}
                >
                  Generated Code
                </h2>
                {generatedCode && (
                  <Button
                    onClick={copyCode}
                    size="sm"
                    className="border-2 transition-all font-bold"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      borderColor: "var(--neon-cyan)",
                      color: "var(--neon-cyan)",
                      boxShadow: "0 0 10px var(--neon-cyan)",
                    }}
                  >
                    Copy Code
                  </Button>
                )}
              </div>

              {generatedCode ? (
                <div
                  className="border-2 rounded-lg overflow-hidden max-h-[600px] overflow-y-auto"
                  style={{
                    borderColor: "var(--neon-cyan)",
                    boxShadow: "0 0 10px var(--neon-cyan)",
                  }}
                >
                  <SyntaxHighlighter
                    language="html"
                    style={gradientDark}
                    customStyle={{
                      margin: 0,
                      padding: '16px',
                      backgroundColor: 'rgba(0, 0, 0, 0.9)',
                      fontSize: '14px',
                      maxHeight: '600px',
                    }}
                    showLineNumbers={false}
                    wrapLines={true}
                    lineNumberStyle={{
                      color: 'var(--neon-cyan)',
                      opacity: 0.5,
                    }}
                  >
                    {generatedCode}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <div
                  className="border-2 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderColor: "var(--neon-magenta)",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  Click "Generate HTML Code" to see the output
                </div>
              )}
            </Card>
          </div>

          {showPreview && tabs.length > 0 && (
            <Card
              className="mt-8 p-6 border-2 backdrop-blur-md"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderColor: "var(--neon-purple)",
                boxShadow: "0 0 15px var(--neon-purple)",
              }}
            >
              <h2
                className="text-2xl font-semibold mb-4 font-mono"
                style={{
                  color: "var(--neon-purple)",
                  textShadow: "0 0 10px var(--neon-purple)",
                }}
              >
                Live Preview
              </h2>
              <div
                className="border-2 rounded-lg overflow-hidden backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderColor: "var(--neon-cyan)",
                  boxShadow: "0 0 15px var(--neon-cyan)",
                }}
              >
                {/* Tab Buttons */}
                <div
                  className="flex border-b-2"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderColor: "var(--neon-magenta)",
                  }}
                >
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActivePreviewTab(index)}
                      className="flex-1 px-4 py-3 transition-all font-mono"
                      style={{
                        backgroundColor: activePreviewTab === index ? "rgba(255, 0, 255, 0.3)" : "transparent",
                        color: activePreviewTab === index ? "var(--neon-magenta)" : "var(--neon-cyan)",
                        borderBottom: activePreviewTab === index ? "3px solid var(--neon-magenta)" : "none",
                        textShadow:
                          activePreviewTab === index ? "0 0 20px var(--neon-magenta)" : "0 0 10px var(--neon-cyan)",
                      }}
                    >
                      {tab.label || `Tab ${index + 1}`}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div
                  className="p-6 min-h-[200px]"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <div
                    className="animate-in fade-in duration-300"
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    {tabs[activePreviewTab]?.content || "No content"}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}
