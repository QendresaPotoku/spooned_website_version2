"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/lib/locale-context"
import { getAllBlogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const { locale, t } = useLocale()
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
              BLOG
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.blog.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t.blog.subtitle}
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">S</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <Badge variant="secondary" className="w-fit mb-3">
                        {post.category[locale]}
                      </Badge>
                      
                      <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title[locale]}
                      </h2>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {post.excerpt[locale]}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4 mt-auto">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString(locale === "de" ? "de-CH" : "en-CH", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime[locale]}
                        </span>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-primary font-medium text-sm mt-4 group-hover:gap-3 transition-all">
                        {t.blog.readMore}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
