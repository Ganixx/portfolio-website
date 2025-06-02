"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"

const techCategories = [
  {
    title: "Programming Languages",
    techs: [
      { name: "Java", color: "#f89820" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Python", color: "#3776ab" },
      { name: "SQL", color: "#336791" },
    ],
  },
  {
    title: "Frontend",
    techs: [
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#000000" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "HTML/CSS", color: "#e34f26" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Spring Boot", color: "#6db33f" },
      { name: "Node.js", color: "#339933" },
      { name: "Express", color: "#000000" },
      { name: "Django", color: "#092e20" },
    ],
  },
  {
    title: "Cloud & DevOps",
    techs: [
      { name: "AWS", color: "#ff9900" },
      { name: "Docker", color: "#2496ed" },
      { name: "Azure", color: "#0078d4" },
      { name: "Jenkins", color: "#d33833" },
    ],
  },
  {
    title: "Databases",
    techs: [
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47a248" },
      { name: "MySQL", color: "#4479a1" },
      { name: "Redis", color: "#dc382d" },
    ],
  },
  {
    title: "AI & ML",
    techs: [
      { name: "OpenAI", color: "#412991" },
      { name: "LangChain", color: "#1c3c3c" },
      { name: "Hugging Face", color: "#ff6b35" },
      { name: "TensorFlow", color: "#ff6f00" },
    ],
  },
]

export default function TechStack() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Tech Stack & Skills
            </h2>
            <p
              className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Technologies I work with to build amazing products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className={`overflow-hidden transition-all duration-700 hover:shadow-lg ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${categoryIndex * 100 + 300}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">{category.title}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.techs.map((tech, techIndex) => (
                      <div
                        key={tech.name}
                        className="tech-logo flex items-center gap-2 p-2 rounded-lg bg-secondary/50 hover:bg-secondary"
                      >
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tech.color }} />
                        <span className="text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
