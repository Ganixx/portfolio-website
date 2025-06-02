"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    id: 1,
    content:
      "Ganesh is an exceptional developer who consistently delivers high-quality code. His expertise in Java and React integration is impressive, and he always goes above and beyond to ensure project success.",
    author: "Sarah Johnson",
    position: "Tech Lead at Cognizant",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    content:
      "Working with Ganesh on our insurance platform was a game-changer. His ability to optimize performance while maintaining security standards is remarkable. The 48% improvement in page load times speaks for itself.",
    author: "Michael Chen",
    position: "Senior Manager, Insurance Solutions",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    content:
      "Ganesh's problem-solving skills and attention to detail are outstanding. He successfully reduced our support tickets by 30% through his innovative authentication solutions. A true full-stack talent.",
    author: "Priya Patel",
    position: "Product Owner",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    content:
      "His work on our fraud detection system exceeded all expectations. Achieving 95% accuracy while reducing detection time by 30% demonstrates his expertise in both AI and system optimization.",
    author: "David Rodriguez",
    position: "Data Science Manager",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              What People Say
            </h2>
            <p
              className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Testimonials from colleagues and collaborators
            </p>
          </div>

          <div
            className={`relative transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <Quote className="h-12 w-12 text-primary/40" />

                  <div className="space-y-4">
                    <p className="text-xl lg:text-2xl leading-relaxed italic">"{testimonials[currentIndex].content}"</p>

                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-secondary">
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                      <p className="text-muted-foreground">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
