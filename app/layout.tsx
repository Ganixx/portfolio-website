import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import SideNavigation from "@/components/side-navigation"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

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
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
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
