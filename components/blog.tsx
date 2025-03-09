"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "Mastering Dynamic Programming: A Step-by-Step Guide",
    excerpt: "Learn how to recognize and solve dynamic programming problems with our comprehensive approach.",
    date: "March 5, 2025",
    category: "Algorithms",
    image: "/placeholder.svg?height=300&width=600",
    slug: "mastering-dynamic-programming",
  },
  {
    id: 2,
    title: "Top 10 System Design Interview Questions in 2025",
    excerpt:
      "Prepare for your system design interviews with these commonly asked questions and our detailed solutions.",
    date: "February 28, 2025",
    category: "System Design",
    image: "/placeholder.svg?height=300&width=600",
    slug: "system-design-interview-questions",
  },
  {
    id: 3,
    title: "How to Optimize Your LeetCode Practice for Maximum Results",
    excerpt: "Strategic approaches to make your coding practice more effective and targeted for interviews.",
    date: "February 20, 2025",
    category: "Study Tips",
    image: "/placeholder.svg?height=300&width=600",
    slug: "optimize-leetcode-practice",
  },
]

const Blog = () => {
  return (
    <section id="blog" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-heading">
          Latest from Our <span className="text-primary">Blog</span>
        </h2>
        <p className="section-subheading max-w-3xl mx-auto">
          Insights, tips, and strategies to help you excel in coding interviews
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">
                  {post.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/blog">View All Articles</Link>
        </Button>
      </div>
    </section>
  )
}

export default Blog

