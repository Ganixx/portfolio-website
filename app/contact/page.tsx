import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact | Ganesh Gouru - Full Stack Developer & AI Specialist",
  description: "Get in touch with Ganesh Gouru for collaboration opportunities and project discussions",
}

export default function ContactPage() {
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
        </div>
      </div>

      <Contact />
    </main>
  )
}
