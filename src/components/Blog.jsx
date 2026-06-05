"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const blogData = [
  {
    type: "Blog",
    title: "Breaking Barriers: The Skills-first Hiring Revolution",
    description:
      "Discussing the invisible barriers in hiring and the business case for skills-first hiring.",
    image: "https://pyramidci.com/wp-content/uploads/2025/01/1-01.jpg",
    href: "#",
  },
  {
    type: "Case Study",
    title:
      "Navigating Mainframe Workforce Uncertainty for a Leading Systems Integrator",
    description:
      "Helping a leading SI hire mainframe experts, upskill workforce, and build long-term talent retention strategies.",
    image: "https://pyramidci.com/wp-content/uploads/2024/11/PCI_112024_Teams-as-a-Service_YS_Thumbnail.png",
    href: "#",
  },
  {
    type: "Blog",
    title: "2025 Industry Trends: The Future of Talent and Workforce Solutions",
    description: "Top Industry Trends to Watch Out for in 2025.",
    image: "https://pyramidci.com/wp-content/uploads/2024/12/AA-01-1.jpg",
    href: "#",
  },
  {
    type: "Blog",
    title:
      "Teams as a Service: Build and Manage Expert Teams Tailored to Your Unique Needs",
    description:
      "A streamlined, flexible solution to optimize product development and save costs.",
    image: "https://pyramidci.com/wp-content/uploads/2024/11/PCI_112024_Industry-Trends-Social-post_YS-08.png",
    href: "#",
  },
];

export default function Blog() {
  const [featuredBlog, ...otherBlogs] = blogData;

  return (
    <section
      id="blogs"
      className="bg-[#080d1f] px-6 py-20 text-white sm:px-8 md:py-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between gap-6">
         
            <SectionTitle> More on Pyramid Talent</SectionTitle>
          
          <a
            href="#"
            className="group hidden items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-violet-300 md:inline-flex"
          >
            All Resources
            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <FeaturedBlogCard blog={featuredBlog} />

          <div className="grid gap-5">
            {otherBlogs.map((blog, index) => (
              <BlogListCard
                key={blog.title}
                blog={blog}
                showDescription={index === 0}
              />
            ))}
          </div>
        </div>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-violet-300 md:hidden"
        >
          All Resources
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

function FeaturedBlogCard({ blog }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <article
      ref={cardRef}
      className="group relative min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-[#0c1228]"
    >
      <a href={blog.href} className="block h-full">
        <motion.div
          style={{ y: imageY }}
          className="absolute -inset-x-6 -top-8 h-[120%]"
        >
          <div
            className="h-full w-full bg-cover bg-center opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
            style={{
              backgroundImage: `url(${blog.image})`,
            }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#080d1f] via-[#080d1f]/70 to-[#080d1f]/15" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />

        <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-6 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#080d1f]">
              {blog.type}
            </span>

            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition group-hover:border-violet-300/50 group-hover:bg-violet-500/20">
              <ArrowUpRight
                size={19}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>

          <div className="max-w-2xl">
            <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              {blog.title}
            </h3>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
              {blog.description}
            </p>

            <span className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#080d1f] transition hover:bg-violet-300">
              Learn More
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#080d1f] text-white">
                <ArrowUpRight size={16} />
              </span>
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

function BlogListCard({ blog }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0c1228] transition hover:border-violet-400/40 hover:bg-white/5">
      <a href={blog.href} className="grid min-h-[165px] grid-cols-[130px_1fr]">
        <div className="relative overflow-hidden bg-[#111831]">
          <div
            className="h-full w-full bg-cover bg-center opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85"
            style={{
              backgroundImage: `url(${blog.image})`,
            }}
          />

          <div className="absolute inset-0 bg-[#080d1f]/30" />
        </div>

        <div className="flex flex-col justify-between p-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-300">
              {blog.type}
            </span>

            <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-snug text-white">
              {blog.title}
            </h3>

          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-sm font-semibold text-violet-300">
              Learn More
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/65 transition group-hover:border-violet-300/50 group-hover:bg-violet-500/20 group-hover:text-white">
              <ArrowUpRight size={17} />
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}