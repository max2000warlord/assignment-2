"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Menu, BookOpen, FileText, BarChart3, Calendar, FolderOpen, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SlideMenu } from "@/components/slide-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/synthwave-cityscape.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10">
        {/* Header */}
        <header
          className="border-b-2 backdrop-blur-md bg-black/30 sticky top-0 z-30"
          style={{ borderColor: "var(--neon-cyan)" }}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8" style={{ color: "var(--neon-cyan)" }} />
              <h1
                className="text-2xl font-bold font-mono"
                style={{
                  color: "var(--neon-cyan)",
                  textShadow: "0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan)",
                }}
              >
                Matthew Anderson<br />
                21988151
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className="border-2 hover:bg-primary/20 transition-all duration-200 bg-black/50"
                style={{
                  borderColor: "var(--neon-pink)",
                  boxShadow: "0 0 15px var(--neon-pink)",
                }}
              >
                <Menu className="h-5 w-5" style={{ color: "var(--neon-pink)" }} />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <section className="text-center mb-16">
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 font-mono"
              style={{
                background: `linear-gradient(90deg, var(--neon-pink), var(--neon-purple), var(--neon-cyan))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px var(--neon-pink))",
              }}
            >
              Welcome to LTU Moodle App
            </h2>
          </section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <NavigationCard
              href="/courses"
              icon={<BookOpen className="h-8 w-8" />}
              title="My Courses"
              description="View your enrolled courses"
              color="var(--neon-cyan)"
            />
            <NavigationCard
              href="/assignments"
              icon={<FileText className="h-8 w-8" />}
              title="Assignments"
              description="Check due dates and submit work"
              color="var(--neon-pink)"
            />
            <NavigationCard
              href="/grades"
              icon={<BarChart3 className="h-8 w-8" />}
              title="Grades"
              description="View your academic progress"
              color="var(--neon-purple)"
            />
            <NavigationCard
              href="/calendar"
              icon={<Calendar className="h-8 w-8" />}
              title="Calendar"
              description="Important dates and deadlines"
              color="var(--neon-magenta)"
            />
            <NavigationCard
              href="/resources"
              icon={<FolderOpen className="h-8 w-8" />}
              title="Resources"
              description="Course materials and downloads"
              color="var(--neon-cyan)"
            />
            <NavigationCard
              href="/tools/tabs-generator"
              icon={<Wrench className="h-8 w-8" />}
              title="Dev Tools"
              description="HTML generators and utilities"
              color="var(--neon-pink)"
            />
          </div>
        </main>

        {/* Slide Menu */}
        <SlideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </div>
  )
}

function NavigationCard({
  href,
  icon,
  title,
  description,
  color,
}: {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <Link href={href}>
      <Card
        className="p-6 border-2 transition-all duration-300 backdrop-blur-md group cursor-pointer h-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderColor: color,
          boxShadow: `0 0 15px ${color}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 30px ${color}, inset 0 0 20px ${color}20`
          e.currentTarget.style.transform = "translateY(-4px)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 15px ${color}`
          e.currentTarget.style.transform = "translateY(0)"
        }}
      >
        <div className="mb-4 group-hover:scale-110 transition-transform" style={{ color }}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 font-mono" style={{ color }}>
          {title}
        </h3>
        <p
          className="leading-relaxed font-medium"
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
          }}
        >
          {description}
        </p>
      </Card>
    </Link>
  )
}
