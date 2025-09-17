// app/blog/rss.xml/route.js
import { getBlogPosts } from "@/app/db/blog";

export async function GET() {
  const allBlogs = getBlogPosts();

  // Sort blogs by date (newest first)
  const sortedBlogs = allBlogs.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const siteUrl = "https://joshlehman.ca"; // Update with your actual domain
  const blogUrl = `${siteUrl}/blog`;

  // Get the most recent blog post date for lastBuildDate
  const lastBuildDate =
    sortedBlogs.length > 0
      ? new Date(sortedBlogs[0].metadata.publishedAt).toUTCString()
      : new Date().toUTCString();

  const rssItems = sortedBlogs
    .map((post) => {
      const postUrl = `${blogUrl}/${post.slug}`;
      const pubDate = new Date(post.metadata.publishedAt).toUTCString();

      // Create a brief excerpt from content (first 200 characters)
      const excerpt = post.content
        ? post.content.replace(/[#*`]/g, "").substring(0, 200) + "..."
        : post.metadata.summary || "";

      return `
    <item>
      <title><![CDATA[${post.metadata.title}]]></title>
      <description><![CDATA[${post.metadata.summary || excerpt}]]></description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      ${
        post.metadata.category
          ? `<category><![CDATA[${post.metadata.category}]]></category>`
          : ""
      }
      ${
        post.metadata.tags &&
        Array.isArray(post.metadata.tags) &&
        post.metadata.tags.length > 0
          ? post.metadata.tags
              .map((tag) => `<category><![CDATA[${tag}]]></category>`)
              .join("\n      ")
          : ""
      }
      <author>joshlehman.dev@gmail.com (Josh Lehman)</author>
    </item>`;
    })
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Josh Lehman's Blog - Software Development Insights</title>
    <description>Insights, tutorials, and deep dives into software development, design, and emerging technologies. Featuring articles on React, Next.js, TypeScript, and modern web development practices.</description>
    <link>${blogUrl}</link>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <managingEditor>joshlehman.dev@gmail.com (Josh Lehman)</managingEditor>
    <webMaster>joshlehman.dev@gmail.com (Josh Lehman)</webMaster>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <pubDate>${lastBuildDate}</pubDate>
    <ttl>1440</ttl>
    <image>
      <url>${siteUrl}/blog-logo.png</url>
      <title>Josh Lehman's Blog</title>
      <link>${blogUrl}</link>
      <description>Software Development Insights</description>
      <width>144</width>
      <height>144</height>
    </image>
    <category>Technology</category>
    <category>Software Development</category>
    <category>Web Development</category>
    <category>Programming</category>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
