// app/blog/atom.xml/route.js
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

  // Get the most recent blog post date for updated
  const lastUpdated =
    sortedBlogs.length > 0
      ? new Date(sortedBlogs[0].metadata.publishedAt).toISOString()
      : new Date().toISOString();

  const atomEntries = sortedBlogs
    .map((post) => {
      const postUrl = `${blogUrl}/${post.slug}`;
      const publishedDate = new Date(post.metadata.publishedAt).toISOString();
      const updatedDate = publishedDate; // Use published date as updated date unless you track updates separately

      // Create a brief excerpt from content (first 200 characters)
      const excerpt = post.content
        ? post.content.replace(/[#*`]/g, "").substring(0, 200) + "..."
        : post.metadata.summary || "";

      const categories = [];
      if (post.metadata.category) {
        categories.push(`<category term="${post.metadata.category}" />`);
      }
      if (post.metadata.tags && Array.isArray(post.metadata.tags)) {
        post.metadata.tags.forEach((tag) => {
          categories.push(`<category term="${tag}" />`);
        });
      }

      return `
  <entry>
    <title type="html"><![CDATA[${post.metadata.title}]]></title>
    <link href="${postUrl}" />
    <id>${postUrl}</id>
    <published>${publishedDate}</published>
    <updated>${updatedDate}</updated>
    <author>
      <name>Josh Lehman</name>
      <email>joshlehman.dev@gmail.com</email>
      <uri>${siteUrl}</uri>
    </author>
    <summary type="html"><![CDATA[${
      post.metadata.summary || excerpt
    }]]></summary>
    ${categories.join("\n    ")}
  </entry>`;
    })
    .join("");

  const atomFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Josh Lehman's Blog - Software Development Insights</title>
  <subtitle>Insights, tutorials, and deep dives into software development, design, and emerging technologies. Featuring articles on React, Next.js, TypeScript, and modern web development practices.</subtitle>
  <link href="${blogUrl}" />
  <link href="${siteUrl}/blog/atom.xml" rel="self" type="application/atom+xml" />
  <id>${blogUrl}</id>
  <updated>${lastUpdated}</updated>
  <author>
    <name>Josh Lehman</name>
    <email>joshlehman.dev@gmail.com</email>
    <uri>${siteUrl}</uri>
  </author>
  <rights>Copyright © ${new Date().getFullYear()} Josh Lehman. All rights reserved.</rights>
  <generator uri="https://nextjs.org/" version="14.0">Next.js</generator>
  <icon>${siteUrl}/favicon.ico</icon>
  <logo>${siteUrl}/blog-logo.png</logo>
  ${atomEntries}
</feed>`;

  return new Response(atomFeed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
