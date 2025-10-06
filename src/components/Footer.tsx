import { Menu, BookOpen, FileText, BarChart3, Calendar, FolderOpen, Wrench } from "lucide-react"
export default function StdNo() {
  return (
    <div className="flex items-center bg-transparent gap-3">
      <BookOpen className="h-8 w-8" style={{ color: "var(--neon-cyan)" }} />
      <h1
        className="text-xl font-bold font-mono bg-black/50 px-5 backdrop-blur-lg rounded-xl"
        style={{
          color: "var(--neon-cyan)",
          textShadow: "0 0 15px var(--neon-cyan), 0 0 35px var(--neon-cyan)",
        }}
      >
        Matthew Anderson<br />
        21988151
      </h1>
    </div>
  )
}
