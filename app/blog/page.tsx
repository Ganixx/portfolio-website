import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Ganesh Gouru - Full Stack Developer & AI Specialist",
  description: "Articles and insights on web development, AI, and technology by Ganesh Gouru",
}

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices with Spring Boot and AWS",
    excerpt:
      "Learn how to architect and deploy microservices that can handle enterprise-scale traffic while maintaining performance and reliability.",
    image: "/placeholder.svg?height=300&width=600",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    tags: ["Spring Boot", "AWS", "Microservices", "Architecture"],
    featured: true,
  },
  {
    id: 2,
    title: "Machine Learning in Production: Lessons from Building a Fraud Detection System",
    excerpt:
      "Real-world insights from developing and deploying a machine learning system that processes millions of transactions daily.",
    image: "/placeholder.svg?height=300&width=600",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    tags: ["Machine Learning", "Python", "AWS Lambda", "Production"],
    featured: true,
  },
  {
    id: 3,
    title: "Optimizing React Performance: From 3.5s to 1.8s Load Times",
    excerpt:
      "A deep dive into the techniques I used to dramatically improve frontend performance in a production application serving 100k+ users.",
    image: "/placeholder.svg?height=300&width=600",
    date: "Nov 10, 2024",
    readTime: "10 min read",
    tags: ["React", "Performance", "Frontend", "Optimization"],
    featured: false,
  },
  {
    id: 4,
    title: "Implementing HIPAA-Compliant Logging in Enterprise Applications",
    excerpt:
      "Best practices for implementing secure, compliant logging systems in healthcare and insurance applications.",
    image: "/placeholder.svg?height=300&width=600",
    date: "Oct 25, 2024",
    readTime: "6 min read",
    tags: ["Security", "HIPAA", "Compliance", "Java"],
    featured: false,
  },
  {
    id: 5,
    title: "Real-time Messaging with Socket.io and Redis",
    excerpt:
      "Building scalable real-time applications that can handle thousands of concurrent users with minimal latency.",
    image: "/placeholder.svg?height=300&width=600",
    date: "Oct 12, 2024",
    readTime: "9 min read",
    tags: ["Node.js", "Socket.io", "Redis", "Real-time"],
    featured: false,
  },
  {
    id: 6,
    title: "AI-Powered Recommendation Systems: A Practical Guide",
    excerpt:
      "How I built a recommendation system that improved sales conversions by 15% using machine learning techniques.",
    image: "/placeholder.svg?height=300&width=600",
    date: "Sep 28, 2024",
    readTime: "11 min read",
    tags: ["AI", "Machine Learning", "Recommendations", "Python"],
    featured: false,
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Insights on full-stack development, AI/ML, and building scalable applications. Sharing lessons learned
              from real-world projects and industry experience.
            </p>
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <Card key={post.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/blog/${post.id}`}>
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {post.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" size="sm" asChild className="w-full">
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
