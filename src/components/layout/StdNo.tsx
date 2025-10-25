import { Menu, BookOpen, FileText, BarChart3, Calendar, FolderOpen, Wrench } from "lucide-react"
export default function StdNo() {
  return (
    <div className="flex items-center gap-3 pt-4 pl-4">
      <div className="flex bg-black/50 backdrop-blur-2xl px-3 py-1 rounded-xl">
        <BookOpen className="h-8 w-8" style={{ color: "var(--neon-cyan)" }} />
        <h1
          className="text-xl font-bold font-mono px-2 rounded-xl"
          style={{
            color: "var(--neon-cyan)",
            textShadow: "0 0 15px var(--neon-cyan), 0 0 35px var(--neon-cyan)",
          }}
        >
          Matthew Anderson<br />
          21988151
        </h1>
      </div>
    </div>
  )
}
