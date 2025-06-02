import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "About | Ganesh Gouru - Full Stack Developer & AI Specialist",
  description: "Learn more about Ganesh Gouru's background, skills, and experience in full-stack development and AI",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <About />
      <TechStack />
      <Experience />
      <Contact />
    </main>
  )
}
