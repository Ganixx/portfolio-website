import type React from "react"
import type { Metadata } from "next"
// Using system fonts for offline build compatibility
import "./globals.css"
import SideNavigation from "@/components/side-navigation"
import { ThemeProvider } from "@/components/theme-provider"


export const metadata: Metadata = {
  title: "Ganesh Gouru - Full Stack Developer & AI Specialist",
  description:
    "Portfolio of Ganesh Gouru showcasing full-stack development projects with Java, React, Spring Boot, and AI technologies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen">
            <SideNavigation />
            <main className="flex-1 ml-0 lg:ml-20">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
