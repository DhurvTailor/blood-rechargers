import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { blogPosts, findBlogBySlug } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = findBlogBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = findBlogBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="py-12">
      <div className="container-page max-w-3xl">
        <Link href="/blogs" className="flex items-center gap-1.5 text-sm font-medium text-crimson-600 hover:underline dark:text-crimson-300">
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <p className="section-eyebrow mt-6">{post.category}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-white sm:text-4xl">{post.title}</h1>
        <div className="mt-3 flex items-center gap-4 text-xs text-ink-400">
          <span className="flex items-center gap-1"><CalendarDays size={13} /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
        </div>

        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl sm:h-96">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <div className="mt-8 max-w-none">
          <p className="text-base leading-relaxed text-ink-700 dark:text-ink-200">{post.content}</p>
        </div>
      </div>
    </article>
  );
}
