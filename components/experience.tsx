"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Calendar, MapPin, Building2 } from "lucide-react"
import { useInView } from "react-intersection-observer"

const experiences = [
  {
    company: "Cognizant",
    position: "Software Engineer(Full-Stack Developer)",
    duration: "Jul 2021 - Jul 2023",
    location: "India",
    type: "Full-time",
    description:
      "Delivered an end-to-end, cloud-native upgrade of the BSPN portal-building React/Redux screens, Spring Boot microservices, Redis caching,Azure AD SSO, and AWS-based DevOps pipelines to give insurance agents a faster, seamless experience.",
    achievements: [
    "Developed Responsive Web Features: Implemented new user-facing features on the BSPN portal using React.js and Redux, building an intuitive single-page application for insurance agents. ",
    "Built and Consumed Microservices: Developed backend Spring Boot microservices and REST APIs powering core BSPN functionalities like client info lookup, policy management, and commission tracking.",
    "Optimized Performance with Caching: Improved page and report load times by implementing a caching layer for frequently requested data. Used Spring’s caching abstraction backed by Redis to store results of expensive operations",
    "DevOps and Cloud Deployment: Gained hands-on experience with AWS cloud infrastructure and DevOps pipelines. Containerized the Spring Boot services using Docker and deployed them on AWS (using Amazon ECS),set up automated build/test pipelines and implemented blue-green deployments for zero-downtime releases.",
    "Monitoring and Support (Run Team): Collaborated with the operations team to monitor the BSPN platform in production. Used monitoring tools like splunk with defined alerts to track uptime, error rates, and performance metrics.",
    "Agile Collaboration and Quality Assurance: Worked in a Scrum team following two-week sprints. Participated in daily stand-ups, sprint planning, and retrospectives, emphasized code quality, wrote unit tests for new backend modules and used Jest to test React components. ",
    "Integrated Enterprise SSO (Azure AD): Worked on Implementation of Single Sign-On using Azure Active Directory for the portal’s authentication. "
    ],
    technologies: ["Java", "React.js", "Spring Boot", "AWS", "Azure Ad", "REST API", "Mysql"],
    icon : Building2
  },
  {
    company: "Cognizant",
    position: "Junior Software Engineer(Full-Stack Developer)",
    duration: "Mar 2021 - Jul 2021",
    location: "India",
    type: "Full-time",
    description:
      "Earned Cognizant Full-Stack Engineer Certificate (Levels 1 & 2) by building a production-ready Docker/EKS Twitter clone—leveraging React, Spring Boot, MySQL, AWS CI/CD, Kafka streams, Cognito auth, and ELK logging—to boost deployment efficiency and observability.",
    achievements: [
    "Completed enterprise-level training in React.js, Java, Spring Boot, MySQL, AWS, Kafka, ELK Stack.",
    "Developed a fully functional Twitter clone as a capstone project to apply learned technologies in a real-world use case, integrating real-time feeds and authentication using AWS Cognito and containerization using Docker and EKS.",
    "Automated deployment workflows using AWS CI/CD pipelines and implemented centralized logging via the ELK Stack, improving efficiency and observability, received Full Stack Engineer Certificate level 1,2 upon completion."
    ],
    technologies: ["Java", "React.js", "Spring Boot", "AWS", "PING SSO", "REST API", "Mysql","Kafka","ELK stack"],
    icon: Building
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
              Experience
            </h2>
            <p
              className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Professional experience as a full stack developer
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden lg:block" />

            <div className="space-y-12">
              {/* Professional Experience */}
              <div
                className={`flex flex-col gap-4 transition-all duration-700 delay-300 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {
                  experiences.map( (experience,index) => {
                    return(
                      <div className="flex items-start gap-8" key={index}>
                        <div className="hidden lg:flex w-16 h-16 bg-primary rounded-full items-center justify-center relative z-10">
                          <experience.icon className="h-8 w-8 text-primary-foreground"/>
                        </div>
                        <div className="flex-1">
                          <Card className="overflow-hidden">
                            <CardContent className="p-8">
                              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                <div>
                                  <h3 className="text-2xl font-bold">{experience.company}</h3>
                                  <p className="text-xl text-primary font-semibold">{experience.position}</p>
                                </div>
                                <div className="flex flex-col lg:items-end gap-2 mt-2 lg:mt-0">
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>{experience.duration}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    <span>{experience.location}</span>
                                  </div>
                                </div>
                              </div>

                              <p className="text-lg mb-6">{experience.description}</p>

                              <div className="space-y-3 mb-6">
                                {experience.achievements.map((achievement, index) => (
                                  <div key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-muted-foreground">{achievement}</p>
                                  </div>
                                ))}
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                    </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
