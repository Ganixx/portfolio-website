"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Target } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-6 transition-all duration-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              About Me
            </h2>
            <p
              className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-500 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              I'm a full-stack software engineer with a strong focus on building products that are both secure and
              efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`space-y-6 transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-lg leading-relaxed">
                With over two years of professional experience and a passion for personal projects, I specialize in
                developing applications using{" "}
                <span className="text-primary font-semibold">Next.js, Spring Boot, TypeScript, React, and NodeJS</span>. I thrive
                in fast-paced, agile environments, always looking for ways to optimize performance and improve user
                experiences.
              </p>

              <p className="text-lg leading-relaxed ">
                Completed my Master's in Computer Science at the University of Texas at Arlington with
                <span className="text-primary font-semibold"> 3.9 GPA</span>, focusing on advanced topics in distributed
                systems, machine learning, and software engineering.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <Target className="h-4 w-4" />
                  Problem Solver
                </div>
                <div className="flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <Award className="h-4 w-4" />
                  Team Player
                </div>
                <div className="flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <GraduationCap className="h-4 w-4" />
                  Continuous Learner
                </div>
              </div>
            </div>

            {/* Right Content - Education Card */}
            <div
              className={`transition-all duration-700 delay-500 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center -mt-2">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="absolute left-6 top-10 bottom-0 w-0.5 timeline-line hidden lg:block" />
                      <h3 className="text-xl font-bold  pl-[3.5rem]">Education</h3>
                      <div className="pl-5 flex gap-6">
                        <div className="hidden lg:flex w-5 h-6 bg-card items-center justify-center z-10">
                          <span className="text-primary font-bold text-lg">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Master's in Computer Science</h4>
                          <p className="text-muted-foreground">University of Texas at Arlington</p>
                          <p className="text-sm text-muted-foreground">Aug 2023 - May 2025 • GPA: 3.9</p>
                          <p className="text-sm mt-2">
                            <span className="font-medium">Coursework:</span> Data Structures, Distributed Systems,
                            Software Engineering, Database Management, Machine Learning, Deep Learning
                          </p>
                        </div>
                      </div>
                      <div className="pl-5 flex gap-6">
                        <div className="hidden lg:flex w-5 h-6 bg-card items-center justify-center z-10">
                          <span className="text-primary font-bold text-lg">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Bachelor's in Computer Science</h4>
                          <p className="text-muted-foreground">GuruNanak Institutions Hyderabad</p>
                          <p className="text-sm text-muted-foreground">Aug 2016 - Jul 2020 • GPA: 3.5</p>
                          <p className="text-sm mt-2">
                            <span className="font-medium">Coursework:</span> Data Structures Intro, Operating Systems,
                            Software Management, Database Systems, Computer Networks, Computer Architecture
                          </p>
                        </div>
                      </div>
                    </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
