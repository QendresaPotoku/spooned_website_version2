"use client"

import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/lib/locale-context"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { locale, t } = useLocale()
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.id !== post.id)
    .slice(0, 2)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        {/* Back Link */}
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.blog.backToBlog}
          </Link>
        </div>

        {/* Article Header */}
        <section className="bg-secondary/50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                {post.category[locale]}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                {post.title[locale]}
              </h1>

              {/* Meta */}
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString(locale === "de" ? "de-CH" : "en-CH", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime[locale]}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image Placeholder */}
        <section className="container mx-auto px-4 -mt-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-2xl border border-border flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">S</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-strong:text-foreground
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:my-1
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            >
              {post.content[locale].split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i}>{line.replace('## ', '')}</h2>
                }
                if (line.startsWith('### ')) {
                  return <h3 key={i}>{line.replace('### ', '')}</h3>
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i}><strong>{line.replace(/\*\*/g, '')}</strong></p>
                }
                if (line.startsWith('- ')) {
                  return null // Will be handled as list
                }
                if (line.trim() === '') return null
                return <p key={i}>{line}</p>
              })}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  {locale === "en" ? "Share this article" : "Artikel teilen"}
                </p>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  {locale === "en" ? "Share" : "Teilen"}
                </Button>
              </div>
            </div>

            {/* Author Card */}
            <div className="mt-12 p-6 bg-secondary/50 rounded-2xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {locale === "en" ? "Spooned Team" : "Spooned Team"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="container mx-auto px-4 mt-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {locale === "en" ? "Related Articles" : "Verwandte Artikel"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="bg-card rounded-xl border border-border p-4 hover:shadow-md transition-all">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {relatedPost.category[locale]}
                      </Badge>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title[locale]}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {relatedPost.readTime[locale]}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
