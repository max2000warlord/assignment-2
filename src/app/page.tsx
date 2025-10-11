"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Menu, BookOpen, FileText, BarChart3, Calendar, FolderOpen, Wrench } from "lucide-react"
import { Card } from "@/components/ui/card"
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <div className="relative z-7">
        <main className="container mx-auto px-4 py-12">
          <section className="relative w-full py-20 flex items-center justify-center">
            <div className="relative z-10 p-10 md:p-20 bg-black/50 backdrop-blur-lg rounded-xl text-center max-w-3xl mx-auto">
              <h1
                className="text-4xl md:text-6xl font-bold font-mono mb-6"
                style={{
                  background: `linear-gradient(90deg, var(--neon-pink), var(--neon-purple), var(--neon-cyan))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px var(--neon-pink)) drop-shadow(0 0 40px var(--neon-cyan))",
                }}
              >
                Welcome to LTU Moodle App
              </h1>
            </div>
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
              color="var(--neon-pink)"
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
              title="Tabs Generator"
              description="HTML generators and utilities"
              color="var(--neon-pink)"
            />
          </div>
        </main>
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
        className="p-6 border-2 transition-all duration-300  group cursor-pointer h-full"
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
