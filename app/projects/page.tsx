import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Projects from "@/components/projects"

export const metadata: Metadata = {
  title: "Projects | Ganesh Gouru - Full Stack Developer & AI Specialist",
  description: "Explore my portfolio of full-stack development and AI projects",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            A collection of real-world applications and innovative solutions I've built, showcasing expertise in
            full-stack development, AI/ML, and enterprise systems.
          </p>
        </div>
      </div>

      <Projects />
    </main>
  )
}
