"use client"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Express", "Java", "RESTful APIs", "GraphQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "AI & ML",
    skills: ["LangChain", "OpenAI API", "NLP", "TensorFlow", "Hugging Face", "Prompt Engineering", "Computer Vision"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Jest", "Cypress"],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-secondary/50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`overflow-hidden transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
