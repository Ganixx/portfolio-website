"use client"

import { useInView } from "react-intersection-observer"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillTimeline = [
  { year: "2016", skills: ["c","html","css"] },
  { year: "2017", skills: ["cpp", "mysql"] },
  { year: "2018", skills: ["js","java", "angular"] },
  { year: "2019", skills: ["python", "mongodb"] },
  { year: "2020", skills: ["react", "bootstrap", "spring", "kafka", "aws"] },
  { year: "2021", skills: ["scala", "express"] },
  { year: "2022", skills: ["tailwindcss", "nextjs", "threejs"] },
  { year: "2023", skills: ["pytorch","figma","jest"] },
  { year: "2024", skills: ["tensorflow", "pytorch", "docker"] },
  { year: "2025", skills: ["ai","azure"] },
]

const skillCategories : {
  [key: string] : "languages" | "databases" | "frontend" | "devops" | "AI" | "frameworks" | "backend" | "tools"
} = {
  c: "languages",
  cpp: "languages",
  mysql: "databases",
  java: "languages",
  angular: "frontend",
  python: "languages",
  mongodb: "databases",
  react: "frontend",
  bootstrap: "frontend",
  spring: "backend",
  kafka: "backend",
  aws: "devops",
  elasticsearch: "databases",
  scala: "languages",
  express: "backend",
  tailwindcss: "frontend",
  nextjs: "frontend",
  leetcode: "tools",
  tensorflow: "AI",
  pytorch: "AI",
  ai : "AI",
  figma: "tools",
  jest: "frameworks",
  docker: "devops",
  threejs : "frameworks",
  js: "languages",
  html: "languages",
  css: "languages",
  azure: "devops"
}

export default function SkillTimeline() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Calculate total skills for animation
  const totalSkills = skillTimeline.reduce((acc, year) => acc + year.skills.length, 0)
  const maxSkills = Math.max(...skillTimeline.map((year) => year.skills.length))


  // Reset animation when in view
  useEffect(() => {
    if (inView) {
      setIsAnimating(true)
      const timer = setTimeout(
        () => {
          setIsAnimating(false)
        },
        totalSkills * 100 + 1000,
      )
      return () => clearTimeout(timer)
    }
  }, [inView, totalSkills])

  // Filter for active categories
  const [activeCategories, setActiveCategories] = useState<string[]>([])
  const allCategories = Array.from(new Set(Object.values(skillCategories)))

  const toggleCategory = (category: string) => {
    if (activeCategories.includes(category)) {
      setActiveCategories(activeCategories.filter((c) => c !== category))
    } else {
      setActiveCategories([...activeCategories, category])
    }
  }

  const isSkillVisible = (skill: string) => {
    if (activeCategories.length === 0) return true
    return activeCategories.includes(skillCategories[skill])
  }

  return (
    <section className="py-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] -right-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-6"
            >
              My Technology Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Skills acquired and technologies mastered over the years
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {allCategories.map((category) => (
              <Badge
                key={category}
                variant={activeCategories.includes(category) ? "default" : "outline"}
                className={`cursor-pointer text-sm py-1 px-3 capitalize ${
                  activeCategories.includes(category) ? "bg-primary" : ""
                }`}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </Badge>
            ))}
            {activeCategories.length > 0 && (
              <Badge
                variant="secondary"
                className="cursor-pointer text-sm py-1 px-3"
                onClick={() => setActiveCategories([])}
              >
                Clear Filters
              </Badge>
            )}
          </motion.div>

          {/* Main Timeline */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <Card className="overflow-hidden border border-primary/20 shadow-lg bg-card/80 backdrop-blur-sm">
              <div className="p-6 lg:p-8">
                
                {/* Timeline Graph */}
                <div className="relative mt-12 mb-6">
                  {/* X-Axis */}
                  <div className="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
                  <div className="block md:hidden absolute top-0 left-0 w-0.5 h-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
                  {/* Graph Content */}
                  <div className="flex flex-col items-start md:flex-row justify-between md:items-end px-2">
                    {skillTimeline.map((yearData, yearIndex) => {
                      const visibleSkills = yearData.skills.filter(isSkillVisible)

                      return (
                        <div
                          key={yearData.year}
                          className={"flex flex-row-reverse md:flex-col items-center gap-1 md:gap-0"}
                        >
                          {/* Skills Column */}
                          <div className="relative flex md:flex-col-reverse items-center md:space-y-reverse md:space-y-3 md:mb-6">
                            {visibleSkills.map((skill, skillIndex) => {
                              const category = skillCategories[skill]
                              const colors = {
                                  bg: "bg-primary/30",
                                  border: "border-primary/70",
                                  hover: "hover:border-primary",
                                  text: "text-primary-foreground",
                              }
                              const delay = isAnimating ? yearIndex * 0.2 + skillIndex * 0.1 : 0

                              return (
                                <motion.div
                                  key={skill}
                                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                  animate={
                                    inView
                                      ? {
                                          opacity: 1,
                                          y: 0,
                                        }
                                      : { opacity: 0, y: 20, scale: 0.8 }
                                  }
                                  transition={{
                                    duration: 0.5,
                                    delay: delay,
                                    type: "spring",
                                    stiffness: 100,
                                  }}
                                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                                  className="relative hover:scale-100"
                                >
                                  <div
                                    className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl overflow-hidden shadow-lg ${
                                      colors.bg
                                    } ${colors.border} border-2 ${
                                      colors.hover
                                    } transition-all duration-300 cursor-pointer transform hover:shadow-xl `}
                                  >
                                    <img
                                      src={`https://skillicons.dev/icons?i=${skill}`}
                                      alt={skill}
                                      loading="lazy"
                                      className="w-full h-full"
                                    />
                                  </div>

                                  {/* Tooltip */}
                                  <div
                                      className="opacity-0 hover:opacity-95 absolute top-0 left-0 w-14 h-14 lg:w-16 lg:h-16 rounded-xl
                                      px-3 py-2 bg-card text-primary text-sm
                                      shadow-xl z-20 border text-center flex justify-center items-start
                                       hover:animate-pulse"
                                    >
                                      {skill}
                                  </div>
                                </motion.div>
                              )
                            })}
                          </div>

                          {/* Year Marker */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
                            className={`w-1 h-8 bg-primary/30 rounded-t-full mb-1`}
                          ></motion.div>

                          {/* Year Label */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: yearIndex * 0.1 + 0.2 }}
                            className={`text-sm font-medium text-muted-foreground`}
                          >
                            {yearData.year}
                          </motion.div>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>
            </Card>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { label: "Years Coding", value: skillTimeline.length },
              { label: "Total Skills", value: totalSkills.toString() },
              { label: "Peak Year Skills", value: maxSkills.toString() },
              { label: "Years Professional", value: "2+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="border border-primary/20 overflow-hidden">
                  <div className="p-4 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={inView ? { scale: 1 } : { scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="text-3xl font-bold text-primary mb-1"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
