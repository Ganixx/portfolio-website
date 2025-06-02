"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Home, User, Briefcase, BookOpen, Mail, Menu, X, Download, Github, Linkedin } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Mail },
]

export default function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Side Navigation */}
      <nav
        className={`
        fixed left-0 top-0 h-full w-20 bg-card border-r border-border z-40
        flex flex-col items-center py-6 space-y-4
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo */}
        <div className="mb-8">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
            <Image 
              src="/waving-doorway.png" 
              alt="logo" 
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path || (pathname === "/" && activeSection === item.name.toLowerCase())

            return (
              <Button
                key={item.name}
                variant={isActive ? "default" : "ghost"}
                size="icon"
                className="relative group"
                onClick={() => {
                  if (pathname === "/" && item.name !== "Projects" && item.name !== "Blog") {
                    scrollToSection(item.name.toLowerCase())
                  } else {
                    window.location.href = item.path
                  }
                }}
              >
                <Icon className="h-5 w-5" />
                <span className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.name}
                </span>
              </Button>
            )
          })}
        </div>

        {/* Theme Toggle */}
        <div className="mt-auto mb-4">
          <ModeToggle />
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/ganixx" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/Ganesh-gouru" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Resume Download */}
        <Button variant="outline" size="icon" asChild>
          <a href="/resume.pdf" download>
            <Download className="h-4 w-4" />
          </a>
        </Button>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
