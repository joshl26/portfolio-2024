import Link from "next/link";
import Image from "next/image";
import { Suspense, cache } from "react";
import ViewCounter from "./view-counter";
import { getViewsCount } from "@/app/db/queries";
import { getBlogPosts } from "@/app/db/blog";
import "../ui/Portfolio.css";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
  alternates: {
    canonical: `/blog`,
  },
};

// Force dynamic rendering for views
export const dynamic = "force-dynamic";

// Cache blog posts to avoid repeated file system reads
const getCachedBlogPosts = cache(getBlogPosts);

// Optimized blog sorting function
const sortBlogsByDate = cache((blogs: any[]) => {
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

// Enhanced blog post card component
function BlogPostCard({ post, index }: { post: any; index: number }) {
  const readingTime = calculateReadingTime(post.content);
  const hasImage = post.metadata.imageUrl;

  return (
    <article className="group relative">
      <Link href={`/blog/${post.slug}`} className="block" prefetch={false}>
        <div
          className=" from-slate-900 via-slate-800 to-slate-900
                       shadow-2xl shadow-blue-500/10 border border-slate-700/50
                       rounded-xl overflow-hidden transition-all duration-300
                       hover:shadow-blue-500/20 hover:border-blue-500/30
                       hover:-translate-y-1 hover:scale-[1.02]"
        >
          {/* Blog Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
            {hasImage ? (
              <Image
                src={post.metadata.imageUrl}
                alt={post.metadata.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 3}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              // Fallback gradient with pattern
              <div
                className="w-full h-full bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30
                             flex items-center justify-center relative overflow-hidden"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10 dot-pattern" />

                {/* Icon */}
                <div className="relative z-10 p-6">
                  <svg
                    className="w-16 h-16 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
              </div>
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

            {/* Category badge (if available) */}
            {post.metadata.category && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                  {post.metadata.category}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta information */}
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
              <time
                className="flex items-center gap-1"
                dateTime={post.metadata.publishedAt}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {readingTime} min read
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors duration-200">
              {post.metadata.title}
            </h3>

            {/* Summary */}
            {post.metadata.summary && (
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.metadata.summary}
              </p>
            )}

            {/* Tags */}
            {post.metadata.tags && post.metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.metadata.tags.slice(0, 3).map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md border border-slate-600/50"
                  >
                    #{tag}
                  </span>
                ))}
                {post.metadata.tags.length > 3 && (
                  <span className="px-2 py-1 text-gray-400 text-xs">
                    +{post.metadata.tags.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Footer with views and read more */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
              <Suspense fallback={<ViewsSkeleton />}>
                <Views slug={post.slug} />
              </Suspense>

              <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-200">
                Read more
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
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

// Main page component
export default function BlogPage() {
  const allBlogs = getCachedBlogPosts();
  const sortedBlogs = sortBlogsByDate(allBlogs);

  return (
    <main className="min-h-screen  from-slate-900 via-slate-800 to-slate-900">
      {/* Background decoration */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" /> */}

      <div className="relative">
        {/* Hero Section */}
        <section className="flex flex-row h-full w-full min-h-[85vh] max-w-screen-xl mx-auto px-4 xl:px-0">
          <div className="m-auto text-center">
            <h1 className="portfolio-h1 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-6">
              BLOG
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Thoughts, tutorials, and insights on software development, design,
              and technology
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="portfolio-main-section max-w-screen-xl mx-auto px-4 xl:px-0 pb-20">
          <header className="text-center mb-12">
            <h2 className="font-bold text-4xl mb-4 tracking-tight text-white pt-8">
              Latest Articles
            </h2>
            <p className="text-gray-400 text-lg">
              {allBlogs.length} article{allBlogs.length !== 1 ? "s" : ""}{" "}
              published
            </p>
          </header>

          {/* Blog Grid */}
          {sortedBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedBlogs.map((post, index) => (
                <BlogPostCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No blog posts yet
              </h3>
              <p className="text-gray-400">Check back soon for new content!</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

// Loading skeletons
function ViewsSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-4 w-4 bg-slate-700 animate-pulse rounded" />
      <div className="h-4 w-16 bg-slate-700 animate-pulse rounded" />
    </div>
  );
}

// Views component
async function Views({ slug }: { slug: string }) {
  try {
    const views = await getViewsCount();
    return (
      <div className="flex items-center gap-2 text-gray-400 text-sm">
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
