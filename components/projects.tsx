"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Calendar } from "lucide-react"
import { useInView } from "react-intersection-observer"


type projectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  date: string;
  github: string;
  demo: string;
  highlights: string[];
}

const projects : projectType[] = [
  {
    id: 1,
    title: "Mav Grades",
    description:
      "A web application providing University of Texas at Arlington students with detailed grade distributions by course and professor, aiding in informed class selection decisions.",
    image: "/mavgrades.png?height=400&width=600",
    tags: ["Next.js", "TypeScript", "SQLite", "Vercel Analytics", "OAuth 2", "TailwindCSS",],
    category: "fullstack",
    date: "Jan 2025",
    github: "https://github.com/acmuta/mavgrades",
    demo: "https://www.mavgrades.com/",
    highlights: [
      "KPI with Vercel analytics integration",
      "over 1,000 unique users within the first month.",
      "A robust data pipeline to extract official grades data from UTA's system",
      "Leading a 11 member cross functional team"
    ],
  },
  {
    id: 2,
    title: "Ticket Management System (Work in Progress)",
    description:
      "Developed a task management web portal for a local computer repair business to streamline their ticketing and workflow processes.",
    image: "/repairshop.png?height=400&width=600",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Zod",
      "NeonDB",
      "React Hook Form",
      "Next.js Server Actions",
      "Drizzle ORM",
      "shadcn/ui",
      "React Table",
      "Kind (Passwordless Auth)"
    ],
    category: "Freelance",
    date: "May 2025",
    github: "https://github.com/Ganixx/repairshop",
    demo: "https://github.com/Ganixx/repairshop",
    highlights: [
      "Implemented secure passwordless authentication using Kind",
      "Built fully type-safe forms using Zod and React Hook Form",
      "Responsive UI with light and dark mode support using Tailwind and shadcn/ui",
      "Utilized Next.js Server Actions and Suspense for optimized server-side interactions"
    ]
  },
  {
    id: 3,
    title: "Simplify",
    description:
      "A Chrome extension designed to help users with reading difficulties (e.g., ADHD) by simplifying web content and enhancing readability.",
    image: "/simplyfyit1.jpg?height=400&width=600",
    tags: ["Vanilla JS", "HTML", "CSS", "n8n", "Clerk", "LocalStorage"],
    category: "Hackathon",
    date: "Mar 2025",
    github: "https://github.com/Ganixx/ADHD-helper",
    demo: "https://github.com/Ganixx/ADHD-helper",
    highlights: [
      "Won 1st Prize at UTA Hackathon 2025",
      "Features include customizable text color, size, and instant text summarization",
      "Integrated n8n automation with Gemini AI for on-page content processing",
      "Built a sleek, responsive UI with persistent local settings"
    ]
  },
  {
    id: 4,
    title: "Enterprise Twitter Clone",
    description:
      "A full-featured Twitter clone built as part of Cognizant's Full Stack Engineer Level 2 certification, leveraging enterprise-grade AWS architecture and modern Java backend.",
    image: "/tweetappc3.png?height=400&width=600",
    tags: ["React.js", "Java", "Spring Boot", "AWS", "Kafka", "ELK Stack"],
    category: "fullstack",
    date: "July 2022",
    github: "https://github.com/Ganixx/tweetappC3",
    demo: "https://github.com/Ganixx/tweetappC3",
    highlights: [
      "Deployed frontend on AWS S3 and backend on ECS within a secure VPC, with user authentication via AWS Cognito",
      "Implemented centralized logging and monitoring using ELK Stack, AWS CodePipeline, and CloudWatch",
      "Built microservices architecture with Kafka-based communication, JWT-secured authentication, and rate limiting",
      "Designed a fully responsive UI with post creation, nested comments, likes, and persistent storage using MySQL"
    ]
  },
]

const categoryList = [ "All",...new Set(projects.map(project => project.category))]
export default function Projects() {
  const [activeTab, setActiveTab] = useState("All")
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab)

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

          <Tabs defaultValue="All" className="mb-8" onValueChange={setActiveTab}>
            <div
              className={`flex justify-center transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <TabsList className="flex w-full max-w-md  ">
                {
                  categoryList.map(category => (
                    <TabsTrigger key={category} value={category}>{category.toUpperCase()}</TabsTrigger> 
                  ))
                }
              </TabsList>
            </div>

            {
              categoryList.map(category => (
                <TabsContent value={category} className="mt-12" key={category}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                      <ProjectCard key={project.id} project={project} index={index} inView={inView} />
                    ))}
                  </div>
                </TabsContent>
              ))
            }
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, inView } : {
  project : projectType,
  index : number,
  inView : boolean
}) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-700 hover:shadow-xl group ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } `}
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
            <div key={idx} className="grid grid-cols-[0.5rem,1fr] gap-2 text-sm items-center justify-center">
              <div className="size-2 bg-primary rounded-full " />
              <div className="text-muted-foreground">{highlight}</div>
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
