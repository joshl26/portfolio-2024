import type { Metadata } from "next";
import { Suspense, cache } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { CustomMDX } from "@/app/components/mdx";
import { getViewsCount } from "@/app/db/queries";
import { getBlogPosts } from "@/app/db/blog";
import { increment } from "@/app/db/actions";
import { unstable_noStore as noStore } from "next/cache";
import type { ViewData } from "../view-counter";

// Type definitions for better type safety
interface BlogPostMetadata {
  title: string;
  publishedAt: string;
  summary?: string;
  image?: string;
  imageUrl?: string;
  tags?: string[];
  category?: string;
  updatedAt?: string;
}

interface BlogPost {
  slug: string;
  content: string;
  metadata: BlogPostMetadata;
}

// Client-only dynamic import for the interactive view counter (keeps it out of initial JS)
const DynamicViewCounter = dynamic(() => import("../view-counter"), {
  ssr: false,
  loading: () => null,
});

// Enhanced metadata generation with comprehensive SEO
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    // @ts-ignore
    imageUrl,
    tags,
    category,
  } = post.metadata;

  // Safely handle tags array
  const tagsArray = Array.isArray(tags) ? tags : [];

  // Enhanced OG image with fallback
  let ogImage =
    image || imageUrl
      ? `https://joshlehman.ca${image || imageUrl}`
      : `https://joshlehman.ca/og?title=${encodeURIComponent(
          title
        )}&date=${publishedTime}&category=${category || ""}`;

  // Calculate reading time
  const wordsPerMinute = 200;
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return {
    title: `${title} | Joshua Lehman's Blog`,
    description:
      description ||
      `Read ${title} by Joshua Lehman. Insights on software development, design, and technology.`,
    keywords:
      tagsArray.length > 0
        ? tagsArray.join(", ")
        : "software development, programming, web development, design, technology",
    authors: [{ name: "Joshua Lehman", url: "https://joshlehman.ca" }],
    creator: "Joshua Lehman",
    publisher: "Joshua Lehman",
    category: category || "Technology",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://joshlehman.ca/blog/${post.slug}`,
    },
    openGraph: {
      title: `${title} | Joshua Lehman`,
      description:
        description ||
        `Read ${title} by Joshua Lehman. Insights on software development and technology.`,
      type: "article",
      publishedTime,
      modifiedTime: post.metadata.updatedAt || publishedTime,
      url: `https://joshlehman.ca/blog/${post.slug}`,
      siteName: "Joshua Lehman's Blog",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      authors: "Joshua Lehman",
      section: category || "Technology",
      tags: tagsArray,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Joshua Lehman`,
      description: description || `Read ${title} by Joshua Lehman`,
      images: [ogImage],
      creator: "@joshlehman",
      site: "@joshlehman",
    },
    other: {
      "article:reading_time": `${readingTime}`,
      "article:word_count": `${wordCount}`,
    },
  };
}

// Enhanced date formatting with relative time
function formatDate(date: string) {
  noStore();
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  // Adjust for negative values
  if (daysAgo < 0) {
    monthsAgo--;
    daysAgo += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }
  if (monthsAgo < 0) {
    yearsAgo--;
    monthsAgo += 12;
  }

  let formattedDate = "";
  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return {
    full: fullDate,
    relative: formattedDate,
    iso: targetDate.toISOString(),
  };
}

// Calculate reading time
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Enhanced breadcrumb component
function Breadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm text-gray-400">
        <li>
          <Link
            href="/"
            className="hover:text-amber-400 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <svg
            className="w-4 h-4 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>
        <li>
          <Link
            href="/blog"
            className="hover:text-amber-400 transition-colors duration-200"
          >
            Blog
          </Link>
        </li>
        <li>
          <svg
            className="w-4 h-4 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>
        <li className="text-gray-300 truncate max-w-xs" title={title}>
          {title}
        </li>
      </ol>
    </nav>
  );
}

// Enhanced article header component
function ArticleHeader({ post }: { post: BlogPost }) {
  const dateInfo = formatDate(post.metadata.publishedAt);
  const readingTime = calculateReadingTime(post.content);
  const tagsArray = Array.isArray(post.metadata.tags) ? post.metadata.tags : [];

  return (
    <header className="mb-12">
      {/* Category badge */}
      {post.metadata.category && (
        <div className="mb-6">
          <span
            className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 
                         text-amber-400 text-sm font-semibold rounded-full border border-amber-500/30
                         backdrop-blur-sm"
          >
            {post.metadata.category}
          </span>
        </div>
      )}

      {/* Title */}
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-tight
                   bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent"
      >
        {post.metadata.title}
      </h1>

      {/* Summary */}
      {post.metadata.summary && (
        <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
          {post.metadata.summary}
        </p>
      )}

      {/* Meta information */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-700/40">
        {/* Author */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full 
                        flex items-center justify-center text-white font-semibold text-sm"
          >
            JL
          </div>
          <div>
            <p className="text-gray-200 font-medium">Joshua Lehman</p>
            <p className="text-gray-400 text-xs">Software Developer</p>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2">
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
          <time
            dateTime={dateInfo.iso}
            className="hover:text-gray-300 transition-colors duration-200"
          >
            {dateInfo.full} ({dateInfo.relative})
          </time>
        </div>

        {/* Reading time */}
        <div className="flex items-center gap-2">
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
          <span>{readingTime} min read</span>
        </div>

        {/* Views */}
        <Suspense fallback={<ViewsSkeleton />}>
          <Views slug={post.slug} />
        </Suspense>
      </div>

      {/* Tags - Fixed to handle non-array tags */}
      {tagsArray.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {tagsArray.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-gray-700/40 text-gray-300 text-sm rounded-lg 
                       border border-gray-600/40 backdrop-blur-sm
                       hover:bg-gray-600/40 hover:border-gray-500/40 hover:text-gray-200
                       transition-all duration-200 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}

// Enhanced table of contents (if needed)
function TableOfContents({ content }: { content: string }) {
  // Extract headings from content (basic implementation)
  const headings = content.match(/^#{1,3}\s+(.+)$/gm) || [];

  if (headings.length === 0) return null;

  return (
    <div className="mb-12 p-6 bg-gray-800/40 border border-gray-700/40 rounded-xl backdrop-blur-sm">
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
        Table of Contents
      </h2>
      <ul className="space-y-2 text-sm text-gray-300">
        {headings.slice(0, 6).map((heading, index) => {
          const level = heading.match(/^#+/)?.[0].length || 1;
          const text = heading.replace(/^#+\s+/, "");
          const slug = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");

          return (
            <li key={index} className={`pl-${(level - 1) * 4}`}>
              <a
                href={`#${slug}`}
                className="hover:text-amber-400 transition-colors duration-200 block py-1"
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Enhanced main component
export default function Blog({ params }: { params: any }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Safely handle tags for structured data
  const tagsArray = Array.isArray(post.metadata.tags) ? post.metadata.tags : [];
  // Get the image URL from post metadata
  // @ts-ignore
  const featuredImage = post.metadata.image || post.metadata.imageUrl;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,119,6,0.05),transparent_50%)]" />

      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Enhanced structured data */}
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.metadata.title,
                description: post.metadata.summary,
                datePublished: post.metadata.publishedAt,
                dateModified:
                  post.metadata.updatedAt || post.metadata.publishedAt,
                image: featuredImage
                  ? `https://joshlehman.ca/${featuredImage}`
                  : `https://joshlehman.ca/og?title=${encodeURIComponent(
                      post.metadata.title
                    )}`,
                url: `https://joshlehman.ca/blog/${post.slug}`,
                author: {
                  "@type": "Person",
                  name: "Joshua Lehman",
                  url: "https://joshlehman.ca",
                },
                publisher: {
                  "@type": "Person",
                  name: "Joshua Lehman",
                  url: "https://joshlehman.ca",
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://joshlehman.ca/blog/${post.slug}`,
                },
                keywords: tagsArray.join(", "),
                wordCount: post.content.split(/\s+/).length,
                timeRequired: `PT${calculateReadingTime(post.content)}M`,
                articleSection: post.metadata.category || "Technology",
                inLanguage: "en-US",
              }),
            }}
          />

          {/* Breadcrumb navigation */}
          <Breadcrumb title={post.metadata.title} />

          {/* Article header */}
          <ArticleHeader post={post} />

          {/* Featured image */}
          {featuredImage && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={featuredImage}
                alt={post.metadata.title}
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          {/* Table of contents (mobile) */}
          <div className="lg:hidden mb-8">
            <TableOfContents content={post.content} />
          </div>

          {/* Two-column layout: article + right-side TOC (desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8">
            <div>
              <article
                className="prose prose-lg prose-invert prose-amber max-w-none
                           prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                           prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:bg-gradient-to-r prose-h1:from-white prose-h1:to-amber-200 prose-h1:bg-clip-text prose-h1:text-transparent
                           prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-white
                           prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-gray-200
                           prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                           prose-strong:text-white prose-strong:font-semibold
                           prose-em:text-gray-200 prose-em:italic
                           prose-code:text-amber-300 prose-code:bg-gray-800/60 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-medium
                           prose-pre:bg-gray-900/80 prose-pre:border prose-pre:border-gray-700/40 prose-pre:rounded-xl prose-pre:backdrop-blur-sm
                           prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-500/5 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
                           prose-blockquote:text-amber-100 prose-blockquote:font-medium prose-blockquote:italic
                           prose-a:text-amber-400 prose-a:no-underline hover:prose-a:text-amber-300 hover:prose-a:underline prose-a:transition-all prose-a:duration-200
                           prose-li:text-gray-300 prose-li:mb-2
                           prose-ul:mb-6 prose-ol:mb-6
                           prose-img:rounded-xl prose-img:shadow-lg
                           prose-hr:border-gray-700/60 prose-hr:my-12
                           prose-table:border-collapse prose-table:border-gray-700/40
                           prose-th:bg-gray-800/60 prose-th:text-amber-300 prose-th:font-semibold prose-th:border prose-th:border-gray-700/40 prose-th:px-4 prose-th:py-3
                           prose-td:border prose-td:border-gray-700/40 prose-td:px-4 prose-td:py-3 prose-td:text-gray-300"
              >
                <CustomMDX source={post.content} />
              </article>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents content={post.content} />
              </div>
            </aside>
          </div>

          {/* Article footer */}
          <footer className="mt-16 pt-8 border-t border-gray-700/40">
            {/* Share buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-gray-400 font-medium">
                Share this article:
              </span>
              <div className="flex gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?url=https://joshlehman.ca/blog/${
                    post.slug
                  }&text=${encodeURIComponent(post.metadata.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/60 hover:bg-blue-600/20 text-gray-400 hover:text-blue-400 
                           rounded-lg border border-gray-700/40 hover:border-blue-500/40
                           transition-all duration-200 group"
                  aria-label="Share on Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://joshlehman.ca/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/60 hover:bg-blue-600/20 text-gray-400 hover:text-blue-500
                           rounded-lg border border-gray-700/40 hover:border-blue-500/40
                           transition-all duration-200"
                  aria-label="Share on LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Back to blog */}
            <Link
              href="/blog"
              prefetch={false}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 
                       font-medium transition-colors duration-200 group"
            >
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to all articles
            </Link>
          </footer>
        </div>
      </main>
    </div>
  );
}

// Increment views with caching
let incrementViews = cache(increment);

// Enhanced Views component — server-rendered count + client-hydrated interactive component
async function Views({ slug }: { slug: string }) {
  // Server fetch of views. getViewsCount may return several shapes:
  // - a number (total)
  // - an array of { slug, count } objects
  // - an object like { [slug]: count }
  const raw = await getViewsCount();

  // Normalize to a ViewData[] array
  let allViews: ViewData[] = [];

  if (raw == null) {
    allViews = [];
  } else if (typeof raw === "number") {
    // Raw total number — represent as a single entry for this slug
    allViews = [{ slug, count: raw }];
  } else if (Array.isArray(raw)) {
    // Ensure each entry has slug and numeric count
    allViews = raw
      .map((r: any) => {
        const s = r?.slug ?? String(r?.slug ?? "");
        const c = Number(r?.count ?? r?.views ?? 0) || 0;
        return { slug: s, count: c };
      })
      .filter((v) => typeof v.slug === "string");
  } else if (typeof raw === "object") {
    // Map-like object: convert numeric values to entries
    const map = raw as Record<string, any>;

    // If object contains keys that are slugs
    const possibleEntries: ViewData[] = Object.entries(map)
      .map(([k, v]) => {
        // skip non-numeric values (except nested objects with count)
        if (typeof v === "number") return { slug: k, count: v };
        if (v && typeof v === "object" && (v.count || v.views)) {
          return { slug: k, count: Number(v.count ?? v.views ?? 0) || 0 };
        }
        return null;
      })
      .filter(Boolean) as ViewData[];

    if (possibleEntries.length > 0) {
      allViews = possibleEntries;
    } else if (typeof (map.count as any) === "number") {
      // e.g., { count: 123 }
      allViews = [{ slug, count: Number(map.count) }];
    } else {
      allViews = [];
    }
  } else {
    allViews = [];
  }

  // Find the count for this slug (fallback 0)
  const matched = allViews.find((v) => v.slug === slug);
  const count = matched ? matched.count : 0;

  // Fire-and-forget increment server-side (cached). Swallow errors so render can't fail.
  incrementViews(slug).catch(() => {
    /* noop */
  });

  return (
    <div className="flex items-center gap-2">
      <svg
        className="w-4 h-4 text-gray-400"
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>

      {/* Server-rendered static count (good for SEO & immediate paint) */}
      <span aria-hidden="true" className="text-sm text-gray-300">
        {count}
      </span>

      {/* Hydrate interactive counter on the client only when JS runs.
          DynamicViewCounter expects ViewData[] for allViews, so pass the normalized array. */}
      <Suspense fallback={null}>
        <DynamicViewCounter allViews={allViews} slug={slug} />
      </Suspense>
    </div>
  );
}

// Enhanced loading skeleton
function ViewsSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 bg-gray-700/60 animate-pulse rounded-full" />
      <div className="h-4 w-16 bg-gray-700/60 animate-pulse rounded" />
    </div>
  );
}
