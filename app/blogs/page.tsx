import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blood Bank Blog",
  description: "Guides, research, and stories about blood donation across India.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blood Banks – Everything You Need to Know"
        title="Latest Blog"
        description="Guides, myths debunked, and research on blood donation."
      />
      <section className="container-page py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`} className="card group overflow-hidden">
              <div className="relative h-44 w-full overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-wide text-crimson-500">{post.category} · {post.readTime}</p>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink-900 dark:text-white">{post.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-ink-500 dark:text-ink-300">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
