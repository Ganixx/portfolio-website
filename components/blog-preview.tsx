import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"

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
]

export default function BlogPreview() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
              <p className="text-xl text-muted-foreground">Insights on development, AI, and technology</p>
            </div>
            <Button variant="outline" asChild className="mt-4 lg:mt-0">
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 lg:h-80">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {blogPosts[0].tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/blog/${blogPosts[0].id}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Side Posts */}
            <div className="space-y-6">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
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
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
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
    </section>
  )
}
