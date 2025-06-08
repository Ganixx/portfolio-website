import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import BlogPreview from "@/components/blog-preview"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      {/* <BlogPreview /> */}
      <Contact />
    </div>
  )
}
