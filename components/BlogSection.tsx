import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function BlogSection() {
  return (
    <section className="container-page py-16 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="section-eyebrow">From the Blog</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-white">
            Everything You Need to Know
          </h2>
        </div>
        <Link href="/blogs" className="flex items-center gap-1.5 text-sm font-semibold text-crimson-600 hover:underline dark:text-crimson-300">
          Read all articles <ArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 6).map((post) => (
          <Link key={post.id} href={`/blogs/${post.slug}`} className="card group overflow-hidden">
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-crimson-500">{post.category} · {post.readTime}</p>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink-900 dark:text-white">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-ink-500 dark:text-ink-300">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
