"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(234, 179, 8, ${Math.random() * 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas!.width) this.x = 0
        else if (this.x < 0) this.x = canvas!.width

        if (this.y > canvas!.height) this.y = 0
        else if (this.y < 0) this.y = canvas!.height
      }

      draw() {
        ctx!.fillStyle = this.color
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    function initParticles() {
      particles = []
      const particleCount = Math.floor((canvas!.width * canvas!.height) / 15000)

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/80" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="animate-in">
                <span className="text-primary font-medium">Hello, I'm</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold animate-in stagger-1">
                Ganesh
                <br />
                <span className="text-primary">Gouru</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground animate-in stagger-2">
                Full Stack Developer & AI Specialist
              </p>
              <p className="text-lg text-muted-foreground max-w-lg animate-in stagger-3">
                Building innovative solutions with Java Script, Java, React, Spring Boot, and cutting-edge AI technologies. 2+ years
                of professional experience in fast-paced, agile environments.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground animate-in stagger-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Arlington, TX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>ganeshgouru02@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1-302-546-2637</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-in stagger-5">
              <Button
                size="lg"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-in stagger-6">
            <div className="relative w-80 h-80 mx-auto">
              {/* Floating Background Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full floating-card" />
              <div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/30 rounded-full floating-card"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/25 rounded-full floating-card"
                style={{ animationDelay: "4s" }}
              />

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                <Image
                  src="/ganesh-gouru.jpg"
                  alt="Ganesh Gouru"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg floating-card">
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>

            <div
              className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-lg floating-card"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-2xl font-bold text-primary">3.9</div>
              <div className="text-sm text-muted-foreground">GPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
