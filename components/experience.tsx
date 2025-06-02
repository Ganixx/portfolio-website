"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Cognizant",
    position: "Software Engineer (Java Full-Stack Developer)",
    duration: "Mar 2021 - Jul 2023",
    location: "India",
    type: "Full-time",
    description:
      "Led full-stack development for an insurance policyholder website serving over 100,000 users, integrating secure authentication with Ping SSO to reduce support tickets by 30%.",
    achievements: [
      "Enhanced user privacy and security by implementing HIPAA-compliant logging and robust backend authentication measures",
      "Optimized frontend performance with lazy loading and caching techniques, reducing average page load time from 3.5s to 1.8s",
      "Streamlined backend operations by optimizing SQL queries with PostgreSQL and developing REST endpoints using Spring Boot",
      "Delivered 10+ production features in an Agile environment, including new signup and account management functionalities",
      "Migrated legacy data to AWS S3, increasing data retrieval speed by 25%",
      "Created AWS CloudFormation templates for development environments, cutting setup time from 4 hours to 45 minutes",
    ],
    technologies: ["Java", "React.js", "Spring Boot", "AWS", "PING SSO", "REST API", "PostgreSQL"],
  },
]

const projects = [
  {
    title: "Dynamic Fitness Tracking Web Application",
    date: "Jan 2025",
    description: "Designed an e-commerce app with React.js, Node.js, and PostgreSQL, increasing transactions by 30%",
    achievements: [
      "Configured Stripe for payment processing, ensuring 99% secure transactions",
      "Built a responsive, mobile-first UI using Tailwind CSS, improving mobile user experience by 40%",
      "Secured user authentication with JWT and OAuth2 for over 500 active users",
      "Implemented a recommendation system using machine learning, improving sales conversions by 15%",
    ],
    technologies: ["React.js", "Node.js", "PostgreSQL", "JWT", "OAuth 2", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Fraud Detection System Using Machine Learning",
    date: "Aug 2024",
    description: "Developed a fraud detection model with Python and scikit-learn, achieving 95% accuracy",
    achievements: [
      "Deployed the model via Flask and AWS Lambda, reducing detection time by 30%",
      "Automated retraining with Airflow, decreasing manual effort by 40%",
      "Created a Plotly Dash dashboard, enhancing analytical efficiency by 30%",
      "Analyzed 1M+ transactions to uncover key fraud patterns",
    ],
    technologies: ["Python", "SciKit-learn", "AWS", "Flask", "Airflow", "AWS Lambda", "Plotly"],
  },
  {
    title: "EngageBot - Intelligent University Assistance System",
    date: "May 2024",
    description: "Delivered a real-time messaging system using Socket.io, Node.js, and MongoDB, supporting 500+ users",
    achievements: [
      "Utilized Redis for session storage, lowering latency by 30%",
      "Used JWT for security, ensuring 99.9% uptime",
      "Applied responsive design principles with CSS Grid and Flexbox, achieving 100% compatibility across devices",
      "Enhanced engagement with a notification system using the Web Push API, driving a 25% increase in activity",
    ],
    technologies: ["Node.js", "MongoDB", "Socket.io", "Web Push API", "CSS Grid", "Redis", "JWT"],
  },
]

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Experience & Projects
            </h2>
            <p
              className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Professional experience and academic projects
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden lg:block" />

            <div className="space-y-12">
              {/* Professional Experience */}
              <div
                className={`transition-all duration-700 delay-300 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-start gap-8">
                  <div className="hidden lg:flex w-16 h-16 bg-primary rounded-full items-center justify-center relative z-10">
                    <Building className="h-8 w-8 text-primary-foreground" />
                  </div>

                  <div className="flex-1">
                    <Card className="overflow-hidden">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold">{experiences[0].company}</h3>
                            <p className="text-xl text-primary font-semibold">{experiences[0].position}</p>
                          </div>
                          <div className="flex flex-col lg:items-end gap-2 mt-2 lg:mt-0">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{experiences[0].duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{experiences[0].location}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-lg mb-6">{experiences[0].description}</p>

                        <div className="space-y-3 mb-6">
                          {experiences[0].achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <p className="text-muted-foreground">{achievement}</p>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {experiences[0].technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Academic Projects */}
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`transition-all duration-700 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200 + 300}ms` }}
                >
                  <div className="flex items-start gap-8">
                    <div className="hidden lg:flex w-16 h-16 bg-card border-2 border-primary rounded-full items-center justify-center relative z-10">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>

                    <div className="flex-1">
                      <Card className="overflow-hidden">
                        <CardContent className="p-8">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold">{project.title}</h3>
                              <p className="text-primary font-semibold">Academic Project</p>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground mt-2 lg:mt-0">
                              <Calendar className="h-4 w-4" />
                              <span>{project.date}</span>
                            </div>
                          </div>

                          <p className="text-lg mb-6">{project.description}</p>

                          <div className="space-y-3 mb-6">
                            {project.achievements.map((achievement, achievementIndex) => (
                              <div key={achievementIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <p className="text-muted-foreground">{achievement}</p>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
