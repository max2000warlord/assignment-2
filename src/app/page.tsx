"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Menu, BookOpen, FileText, BarChart3, Calendar, Scale, Contact, FolderOpen, Wrench, Zap } from "lucide-react"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl max-h-xl justify-center text-center mx-auto">
            <NavigationCard
              href="/tools/tabs-generator"
              icon={<Zap className="h-8 w-8" />}
              title="Tabs Generator"
              description=""
              color="var(--neon-pink)"
            />
            <NavigationCard
              href="/tools/escape-room"
              icon={<Scale className="h-8 w-8" />}
              title="Escape Room"
              description=""
              color="var(--neon-cyan)"
            />
            <NavigationCard
              href="about/"
              icon={<Calendar className="h-8 w-8" />}
              title="About Us"
              description=""
              color="var(--neon-purple)"
            />
            <NavigationCard
              href="Contact"
              icon={<Contact className="h-8 w-8" />}
              title="Contact us"
              description=""
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
        className="p-6 border-0 transition-all duration-300 backdrop-blur-lg group cursor-pointer h-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderColor: color,
          boxShadow: `0 0 0px ${color}`,
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
        <h3 className="text-3xl font-bold mb-2 font-mono" style={{ color }}>
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
