/* eslint-disable react/no-unescaped-entities */
import { Suspense, cache } from "react";
import Image from "next/image";
import Link from "next/link";
import ViewCounter from "./view-counter";
import { getViewsCount } from "@/app/db/queries";
import { getBlogPosts } from "@/app/db/blog";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Type definitions for better type safety
interface BlogPostMetadata {
  title: string;
  publishedAt: string;
  summary?: string;
  imageUrl?: string | StaticImport;
  category?: string;
  tags?: string[];
}

interface BlogPost {
  slug: string;
  content: string;
  metadata: BlogPostMetadata;
}

// Enhanced metadata with better SEO
export const metadata = {
  title: "Blog | Insights on Software Development & Design",
  description:
    "Discover in-depth articles, tutorials, and insights on software development, web design, programming best practices, and cutting-edge technology trends.",
  keywords:
    "software development, web development, programming, design, technology, tutorials, coding, javascript, react, nextjs",
  authors: [{ name: "Josh Lehman" }],
  creator: "Josh Lehman",
  publisher: "Josh Lehman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/blog",
    title: "Blog | Software Development Insights",
    description:
      "Read my latest thoughts on software development, design patterns, and technology trends.",
    siteName: "Josh Lehman's Portfolio",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blog - Software Development Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Software Development Insights",
    description:
      "Read my latest thoughts on software development, design patterns, and technology trends.",
    images: ["/twitter-blog.jpg"],
    creator: "@joshlehman_dev",
  },
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": [
        {
          url: "/blog/rss.xml",
          title: "Josh Lehman's Blog RSS Feed",
        },
      ],
      "application/atom+xml": [
        {
          url: "/blog/atom.xml",
          title: "Josh Lehman's Blog Atom Feed",
        },
      ],
    },
  },
  category: "Technology",
};

// Force dynamic rendering for views
export const dynamic = "force-dynamic";

// Cache blog posts to avoid repeated file system reads
const getCachedBlogPosts = cache(getBlogPosts);

// Optimized blog sorting function
const sortBlogsByDate = cache((blogs: BlogPost[]) => {
  return [...blogs].sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });
});

// Enhanced date formatting
const formatDate = cache((date: string): string => {
  const targetDate = new Date(date.includes("T") ? date : `${date}T00:00:00`);
  return targetDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

// Calculate reading time
const calculateReadingTime = cache((content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
});

// Enhanced blog post card component with better styling and SEO
function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  const readingTime = calculateReadingTime(post.content);
  const hasImage = post.metadata.imageUrl;
  // Ensure tags is always an array
  const tags = Array.isArray(post.metadata.tags) ? post.metadata.tags : [];

  return (
    <article
      className="group relative h-full"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block h-full"
        prefetch={false}
        aria-label={`Read article: ${post.metadata.title}`}
      >
        <div
          className="h-full bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95
                     backdrop-blur-sm shadow-2xl shadow-amber-500/5 border border-gray-700/40
                     rounded-2xl overflow-hidden transition-all duration-500 ease-out
                     hover:shadow-amber-500/15 hover:shadow-3xl hover:border-amber-500/40
                     hover:-translate-y-2 hover:scale-[1.03] hover:rotate-1
                     before:absolute before:inset-0 before:bg-gradient-to-r 
                     before:from-amber-500/0 before:via-yellow-500/0 before:to-amber-600/0
                     before:opacity-0 hover:before:opacity-10 before:transition-opacity
                     before:duration-500 before:rounded-2xl"
        >
          {/* Blog Image */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-amber-900/30 via-yellow-900/30 to-amber-800/30">
            {hasImage ? (
              <Image
                src={post.metadata.imageUrl!}
                alt={post.metadata.title || "Blog post image"}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                priority={index < 2}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                itemProp="image"
              />
            ) : (
              // Enhanced fallback with animated gradient
              <div
                className="w-full h-full bg-gradient-to-br from-amber-600/40 via-yellow-600/40 to-amber-700/40
                           flex items-center justify-center relative overflow-hidden
                           before:absolute before:inset-0 before:bg-gradient-to-r
                           before:from-transparent before:via-white/5 before:to-transparent
                           before:translate-x-[-100%] group-hover:before:translate-x-[100%]
                           before:transition-transform before:duration-1000"
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.3),transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(217,119,6,0.3),transparent_50%)]" />
                </div>

                {/* Enhanced icon */}
                <div className="relative z-10 p-8 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-20 h-20 text-white/70 drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
            )}

            {/* Enhanced overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

            {/* Category badge with better styling */}
            {post.metadata.category && (
              <div className="absolute top-5 left-5">
                <span
                  className="px-4 py-2 bg-gradient-to-r from-amber-500/90 to-yellow-600/90 
                               text-white text-xs font-semibold rounded-full backdrop-blur-md
                               shadow-lg border border-white/20 uppercase tracking-wider
                               transform group-hover:scale-105 transition-transform duration-300"
                >
                  {post.metadata.category}
                </span>
              </div>
            )}

            {/* Reading time badge */}
            <div className="absolute top-5 right-5">
              <span
                className="px-3 py-1 bg-black/50 text-white/90 text-xs font-medium 
                             rounded-full backdrop-blur-sm border border-white/10
                             flex items-center gap-1"
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {readingTime}m
              </span>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="p-7 flex flex-col justify-between flex-1">
            {/* Meta information with better spacing */}
            <div className="flex items-center gap-6 mb-5 text-sm text-gray-400">
              <time
                className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-200"
                dateTime={post.metadata.publishedAt}
                itemProp="datePublished"
              >
                <svg
                  className="w-4 h-4 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(post.metadata.publishedAt)}
              </time>

              <div className="flex items-center gap-2 text-gray-400">
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {readingTime} min read
              </div>
            </div>

            {/* Enhanced Title */}
            <h3
              className="text-2xl font-bold text-white mb-4 line-clamp-2 
                         group-hover:text-transparent group-hover:bg-gradient-to-r 
                         group-hover:from-amber-300 group-hover:via-yellow-300 
                         group-hover:to-amber-400 group-hover:bg-clip-text 
                         transition-all duration-300 leading-tight"
              itemProp="headline"
            >
              {post.metadata.title}
            </h3>

            {/* Enhanced Summary */}
            {post.metadata.summary && (
              <p
                className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3
                           group-hover:text-gray-200 transition-colors duration-300"
                itemProp="description"
              >
                {post.metadata.summary}
              </p>
            )}

            {/* Enhanced Tags - Fixed TypeScript error */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6" itemProp="keywords">
                {tags.slice(0, 3).map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-700/60 text-gray-300 text-xs rounded-lg 
                             border border-gray-600/40 backdrop-blur-sm
                             hover:bg-gray-600/60 hover:border-gray-500/60
                             transition-colors duration-200 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className="px-3 py-1.5 text-gray-400 text-xs font-medium">
                    +{tags.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Enhanced Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-gray-700/40 mt-auto">
              <Suspense fallback={<ViewsSkeleton />}>
                <Views slug={post.slug} />
              </Suspense>

              <div
                className="flex items-center text-amber-400 text-sm font-semibold 
                            group-hover:text-amber-300 transition-all duration-300
                            transform group-hover:translate-x-1"
              >
                <span className="mr-2">Read article</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

// Main page component with enhanced styling
export default function BlogPage() {
  const allBlogs = getCachedBlogPosts();
  const sortedBlogs = sortBlogsByDate(allBlogs);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog/" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,119,6,0.1),transparent_50%)]" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <section className="flex flex-col justify-center items-center min-h-[90vh] max-w-screen-xl mx-auto px-6 xl:px-0 text-center">
          {/* Breadcrumb navigation */}
          <div className="pt-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="space-y-8 max-w-4xl">
            {/* Enhanced heading with better gradient */}
            <h1
              className="portfolio-h1 bg-gradient-to-r from-white via-amber-200 to-yellow-200 
                          bg-clip-text text-transparent mb-8 tracking-tight
                          drop-shadow-2xl text-6xl md:text-7xl lg:text-8xl font-black"
            >
              BLOG
            </h1>

            {/* Enhanced subtitle */}
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto">
                Insights, tutorials, and deep dives into
              </p>
              <p
                className="text-xl md:text-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 
                          bg-clip-text text-transparent font-semibold"
              >
                software development, design, and emerging technologies
              </p>
            </div>

            {/* Stats or CTA section */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span>{allBlogs.length} articles published</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <span>Weekly updates</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Blog Posts Section */}
        <section className="max-w-screen-xl mx-auto px-6 xl:px-0 pb-24">
          <header className="text-center mb-16">
            <h2 className="font-bold text-5xl mb-6 tracking-tight text-white">
              Latest Articles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover the latest insights and tutorials from my development
              journey
            </p>
          </header>

          {/* Enhanced Blog Grid */}
          {sortedBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {sortedBlogs.map((post, index) => (
                <BlogPostCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            // Enhanced Empty State
            <div className="text-center py-24">
              <div
                className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-800 to-gray-700 
                            rounded-2xl flex items-center justify-center shadow-2xl
                            border border-gray-600/50"
              >
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Coming Soon
              </h3>
              <p className="text-gray-400 text-lg max-w-md mx-auto">
                I'm working on some amazing content. Check back soon for
                insightful articles and tutorials!
              </p>
            </div>
          )}
        </section>
      </div>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Your Blog Name", // Replace with your blog name
            description:
              "Insights and tutorials on software development, design, and technology",
            url: "/blog",
            author: {
              "@type": "Person",
              name: "Joshua Lehman",
            },
            publisher: {
              "@type": "Person",
              name: "Joshua Lehman",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "/blog",
            },
          }),
        }}
      />
    </main>
  );
}

// Enhanced loading skeletons
function ViewsSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-4 w-4 bg-gray-700/60 animate-pulse rounded-full" />
      <div className="h-4 w-20 bg-gray-700/60 animate-pulse rounded-lg" />
    </div>
  );
}

// Enhanced Views component
async function Views({ slug }: { slug: string }) {
  try {
    const views = await getViewsCount();
    return (
      <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-gray-300 transition-colors duration-200">
        <ViewCounter allViews={views} slug={slug} />
      </div>
    );
  } catch (error) {
    console.error(`Error loading views for ${slug}:`, error);
    return (
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>Views unavailable</span>
      </div>
    );
  }
}
