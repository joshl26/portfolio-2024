import Link from "next/link";
import { Suspense } from "react";
import ViewCounter from "./view-counter";
import { getViewsCount } from "@/app/db/queries";
import { getBlogPosts } from "@/app/db/blog";
import "../ui/Portfolio.css";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export async function generateStaticParams() {
  const blogResponse = getBlogPosts();
  const allBlogs = blogResponse.map(({ slug }) => ({ slug }));

  const viewsResponse = await getViewsCount();
  const views = viewsResponse.map(({ slug }) => ({ slug }));

  return [...allBlogs, ...views];
}

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <main className="max-w-screen-xl m-auto px-4 xl:px-0">
      <section className=" flex flex-row  h-full w-full min-h-[85vh]">
        <div className="m-auto">
          <h1 className="flex portfolio-h1 h-full w-full items-center ">
            BLOG
          </h1>
        </div>
      </section>
      <section className="portfolio-main-section flex flex-col min-w-[300px] w-full min-h-[90vh] mx-auto xl:px-0">
        <h1 className="font-medium text-4xl mt-6 mb-4 tracking-tighter text-center">
          Latest articles from my blog:
        </h1>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 my-2"
              href={`/blog/${post.slug}`}
            >
              <div className="bg-slate-900 shadow-2xl shadow-blue-500/20 border border-slate-600 w-full md:w-3/4 flex flex-col rounded-md p-4 m-auto">
                <p className="font-lite tracking-tight">
                  {post.metadata.publishedAt}
                </p>

                <p className="font-bold text-xl tracking-tight">
                  {post.metadata.title}
                </p>
                <Suspense fallback={<p className="h-6" />}>
                  <Views slug={post.slug} />
                </Suspense>
              </div>
            </Link>
          ))}
      </section>
    </main>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
