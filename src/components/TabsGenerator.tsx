"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwaveStyle, synthwaveColors } from '@/lib/theme-utils';
interface Tab {
  id: string
  label: string
  content: string
}

export default function TabsGenerator() {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: "1", label: "", content: "" },
    { id: "2", label: "", content: "" },
  ])
  const [saveName, setSaveName] = useState("")
  const [isSaving, setIsSaving] = useState(false)
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
            font-size: 15px;
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
  const saveCode = async () => {
    if (!saveName.trim()) {
      alert("Please enter a name for your output!")
      return
    }

    setIsSaving(true)
    try {
      const response = await fetch('/api/outputs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: saveName,
          htmlCode: generatedCode
        })
      })

      if (response.ok) {
        alert("Output saved successfully!")
        setSaveName("")
      } else {
        alert("Failed to save output")
      }
    } catch (error) {
      alert("Error saving output")
    } finally {
      setIsSaving(false)
    }
  }
  return (
    <div className=" relative">
      <div className="absolute inset-0" />

      <div className="relative z-0">
        <main className="container text-center mx-auto py-0">
          <Card
            className="text-4xl bg-black/50 inline-block px-4 backdrop-blur-2xl font-bold font-mono border-0 space-y-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <h2
              style={{
                background: `linear-gradient(90deg, var(--neon-pink), var(--neon-purple), var(--neon-cyan))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 10px var(--neon-pink)) drop-shadow(0 0 20px var(--neon-purple)) drop-shadow(0 0 30px var(--neon-cyan))",
              }}
            >
              TABS GENERATOR
            </h2>
          </Card>
          <div className="pt-2 grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-xl">
            <Card
              className="pt-4 backdrop-blur-2xl border-0 space-y-4 px-3 h-fit max-h-[70vh] overflow-y-auto"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderColor: "var(--neon-cyan)",
                height: '90vh',
                maxHeight: '90vh',
              }}
            >
              <h2
                className="text-3xl text-center md:text-3xl font-bold font-mono mb-0"
                style={{
                  background: 'linear-gradient(90deg, var(--neon-pink), var(--neon-purple), var(--neon-cyan))',
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 10px var(--neon-pink)) drop-shadow(0 0 20px var(--neon-purple)) drop-shadow(0 0 30px var(--neon-cyan))",
                }}
              >
                Configure Tabs
              </h2>

              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className="border-0 px-6 py-4 rounded-xl space-y-3 transition-all"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "var(--neon-magenta)",
                    boxShadow: "0 0 10px var(--neon-magenta)",
                  }}
                >
                  <input
                    type="text"
                    value={tab.label}
                    onChange={(e) => updateTab(tab.id, "label", e.target.value)}
                    placeholder="Tab name"
                    className="w-full p-3 border-2 rounded-xl backdrop-blur-2xl focus:outline-none transition-all font-mono"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.125)",
                      borderColor: "var(--neon-cyan)",
                      color: "var(--neon-cyan)",
                      boxShadow: "0 0 10px var(--neon-cyan)",
                    }}
                  />
                  <textarea
                    value={tab.content}
                    onChange={(e) => updateTab(tab.id, "content", e.target.value)}
                    className="w-full p-3 border-2 rounded-xl backdrop-blur-2xl focus:outline-none transition-all resize-none"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.125)",
                      borderColor: "var(--neon-cyan)",
                      color: "rgba(255, 255, 255, 0.9)",
                      boxShadow: "0 0 10px var(--neon-cyan)",
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
              <div className="flex justify-center gap-3">
                <Button
                  onClick={addTab}
                  className="inline-block text-lg border-0 flex py-10 transition-all font-bold"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderColor: "var(--neon-cyan)",
                    color: "var(--neon-cyan)",
                    boxShadow: "0 0 20px var(--neon-cyan)",
                  }}
                >
                  Add New Tab
                </Button>
                <Button
                  onClick={() => setShowPreview(!showPreview)}
                  variant="outline"
                  className="inline-block text-lg border-0 flex py-10 transition-all font-bold"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderColor: "var(--neon-purple)",
                    color: "var(--neon-purple)",
                    boxShadow: "0 0 20px var(--neon-purple)",
                  }}
                >
                  {showPreview ? "Hide" : "Show"} Live Preview
                </Button>
                <Button
                  onClick={generateCode}
                  className="inline-block text-lg border-0 flex py-10 transition-all font-bold"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderColor: "var(--neon-pink)",
                    color: "var(--neon-pink)",
                    boxShadow: "0 0 20px var(--neon-pink)",
                  }}
                >
                  Generate HTML Code
                </Button>
              </div>
            </Card>
            {generatedCode ? (
              <div className="relative rounded-xl">
                {/* Floating header */}
                <div
                  className="absolute top-0 left-0 right-0 z-10 px-6 pt-4 flex justify-center items-center"
                >
                  {/* Centered title */}
                  <CardHeader className="whitespace-nowrap justify-center">
                    <h2
                      className="text-3xl text-center md:text-3xl font-bold font-mono mb-0"
                      style={{
                        background: `linear-gradient(90deg, var(--neon-pink), var(--neon-purple), var(--neon-cyan))`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter: "drop-shadow(0 0 10px var(--neon-pink)) drop-shadow(0 0 20px var(--neon-purple)) drop-shadow(0 0 30px var(--neon-cyan))",
                      }}
                    >
                      Generated Code
                    </h2>

                    <div className="flex gap-2 items-center pt-4">
                      <input
                        type="text"
                        placeholder="Enter output name"
                        value={saveName}
                        onChange={(e) => setSaveName(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg border-2 font-mono"
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                          borderColor: "var(--neon-cyan)",
                          color: "var(--neon-cyan)",
                        }}
                      />
                      <Button
                        onClick={saveCode}
                        disabled={isSaving}
                        size="sm"
                        className="border-2 transition-all font-bold rounded-lg"
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                          borderColor: "var(--neon-magenta)",
                          color: "var(--neon-purple)",
                          boxShadow: "0 0 15px var(--neon-magenta)",
                        }}
                      >
                        {isSaving ? "Saving..." : "Save"}
                      </Button>
                      <Button
                        onClick={copyCode}
                        size="sm"
                        className="border-0 transition-all font-bold rounded-lg"
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                          borderColor: "var(--neon-cyan)",
                          color: "var(--neon-cyan)",
                          boxShadow: "0 0 15px var(--neon-cyan)",
                        }}
                      >
                        Copy Code
                      </Button>
                    </div>
                  </CardHeader>

                  {/* Button absolutely positioned to the right */}
                </div>
                {/* SyntaxHighlighter as the card */}

                <div
                  className="border-0 rounded-xl backdrop-blur-2xl px-3 pt-8 p-8 pb-8 text-center flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderColor: "var(--neon-magenta)",
                    color: "rgba(255, 255, 255, 0.5)",
                    overflow: 'auto',
                    height: '90vh',
                    maxHeight: '90vh',
                  }}
                >
                  <SyntaxHighlighter
                    className="p-8"
                    language="html"
                    style={synthwaveStyle}
                    customStyle={{
                      margin: 0,
                      padding: '10px 24px 24px 0px', // Increased top padding to 100px
                      fontSize: '14px',
                      height: '70vh',
                      maxHeight: '70vh',
                      borderRadius: '10px',
                      backgroundColor: "rgba(0, 0, 0, 0.0)",
                    }}
                    showLineNumbers={true}
                    wrapLines={true}
                    lineNumberStyle={{
                      color: 'var(--neon-cyan)',
                      opacity: 1,
                      textShadow: '0 0 5px rgba(0, 255, 255, 0.3)',
                    }}
                  >
                    {generatedCode}
                  </SyntaxHighlighter>

                </div>
              </div>
            ) : (
              <Card
                className="p-6 pt-4 border-0 space-y-4 h-fit max-h-[70vh] overflow-y-auto backdrop-blur-2xl"
                style={{
                  borderColor: "var(--neon-pink)",
                  boxShadow: "0 0 20px var(--neon-pink)",
                  height: '90vh',
                  maxHeight: '90vh',
                  background: 'linear-gradient(135deg, rgba(25, 0, 49, 0.5) 0%, rgba(12, 0, 24, 0.5) 100%)',
                }}
              >
                <div className="flex justify-center border-0">
                  <h2
                    className="text-3xl font-semibold border-0 font-mono"
                    style={{
                      color: "var(--neon-pink)",
                      textShadow: "0 0 0px var(--neon-pink)",
                      background: "transparent",
                    }}
                  >
                    Generated Code
                  </h2>
                </div>
                <div
                  className="border-0 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderColor: "var(--neon-magenta)",
                    color: "rgba(255, 255, 255, 0.5)",
                    height: '70vh',
                    maxHeight: '70vh',
                  }}
                >
                  Click "Generate HTML Code" to see the output
                </div>
              </Card>
            )}
          </div>

          {showPreview && tabs.length > 0 && (
            <Card
              className="mt-8 p-6 border-0 backdrop-blur-2xl"
              style={{
                borderColor: "var(--neon-purple)",
                boxShadow: "0 0 15px var(--neon-purple)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h2
                className="text-2xl font-semibold mb-0 font-mono"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--neon-purple)",
                  textShadow: "0 0 10px var(--neon-purple)",
                }}
              >
                Live Preview
              </h2>
              <div
                className="border-0 rounded-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(26, 0, 51, 0.5) 0%, rgba(13, 0, 26, 0.5) 100%)',
                  borderColor: "var(--neon-cyan)",
                  boxShadow: "0 0 10px var(--neon-cyan)",
                }}
              >
                {/* Tab Buttons */}
                <div
                  className="flex border-b-0"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
