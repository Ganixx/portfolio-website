"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Calendar } from "lucide-react"
import { useInView } from "react-intersection-observer"

const projects = [
  {
    id: 1,
    title: "Dynamic Fitness Tracking Web Application",
    description:
      "A comprehensive e-commerce fitness tracking application with payment processing, user authentication, and ML-powered recommendations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React.js", "Node.js", "PostgreSQL", "JWT", "OAuth 2", "Stripe", "Machine Learning"],
    category: "fullstack",
    date: "Jan 2025",
    github: "https://github.com/ganixx",
    demo: "https://demo.com",
    highlights: [
      "30% increase in transactions",
      "99% secure payment processing",
      "40% improved mobile UX",
      "15% better sales conversions",
    ],
  },
  {
    id: 2,
    title: "Fraud Detection System Using Machine Learning",
    description:
      "Advanced fraud detection system using machine learning algorithms with real-time processing and automated retraining capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "SciKit-learn", "AWS", "Flask", "Airflow", "AWS Lambda", "Plotly"],
    category: "ai",
    date: "Aug 2024",
    github: "https://github.com/ganixx",
    demo: "https://demo.com",
    highlights: ["95% accuracy rate", "30% faster detection", "40% reduced manual effort", "1M+ transactions analyzed"],
  },
  {
    id: 3,
    title: "EngageBot - Intelligent University Assistance System",
    description:
      "Real-time messaging system for university assistance with intelligent chatbot capabilities and push notifications.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "MongoDB", "Socket.io", "Web Push API", "CSS Grid", "Redis", "JWT"],
    category: "fullstack",
    date: "May 2024",
    github: "https://github.com/ganixx",
    demo: "https://demo.com",
    highlights: ["500+ concurrent users", "30% lower latency", "99.9% uptime", "25% increased engagement"],
  },
  {
    id: 4,
    title: "Insurance Policyholder Platform",
    description:
      "Enterprise-scale insurance platform serving 100,000+ users with secure authentication and optimized performance.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Java", "React.js", "Spring Boot", "AWS", "PING SSO", "PostgreSQL"],
    category: "enterprise",
    date: "Mar 2021 - Jul 2023",
    github: "https://github.com/ganixx",
    demo: "https://demo.com",
    highlights: ["100,000+ users", "30% reduced support tickets", "48% faster page loads", "HIPAA compliant"],
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Real-world applications and innovative solutions
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
            <div
              className={`flex justify-center transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                <TabsTrigger value="ai">AI/ML</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} inView={inView} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fullstack" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} inView={inView} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} inView={inView} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="enterprise" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} inView={inView} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, inView }) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-700 hover:shadow-xl group ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200 + 500}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{project.date}</span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-2">
          {project.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-0">
        <Button variant="outline" size="sm" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
