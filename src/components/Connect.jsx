"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, UsersRound } from "lucide-react";
import SectionTitle from "./SectionTitle";

const paths = [
  {
    title: "For Job Seekers",
    label: "Looking for career opportunities?",
    buttonText: "Find Jobs",
    href: "#",
    image: "/service1.jpg",
    imageAlt: "Professional looking for career opportunities",
    icon: BriefcaseBusiness,
  },
  {
    title: "For Employers",
    label: "Looking for the right talent?",
    buttonText: "Hire Talent",
    href: "#",
    image: "/service2.jpg",
    imageAlt: "Employer hiring skilled talent",
    icon: UsersRound,
  },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="bg-[#080d1f] px-6 py-20 text-white sm:px-8 md:py-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle>Choose your path</SectionTitle>

        <div className="grid gap-5 lg:grid-cols-2 mt-10">
          {paths.map((path, index) => (
            <ConnectCard key={path.title} path={path} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectCard({ path, index }) {
  const Icon = path.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group relative min-h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-[#0c1228]"
    >
      <div className="absolute inset-0">
        <Image
          src={path.image}
          alt={path.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-35"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#080d1f] via-[#080d1f]/85 to-[#080d1f]/35" />
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

      <a
        href={path.href}
        className="relative z-10 flex min-h-[380px] flex-col justify-between p-7 sm:p-8 lg:p-10"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/25 bg-violet-500/15 text-violet-300 transition group-hover:border-violet-300/50 group-hover:bg-violet-500/25 group-hover:text-white">
          <Icon size={26} strokeWidth={1.7} />
        </div>

        <div className="max-w-md">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-300">
            {path.label}
          </p>

          <h3 className="text-3xl font-semibold tracking-tight md:text-4xl mt-5">
            {path.title}
          </h3>

          <ButtonLabel>{path.buttonText}</ButtonLabel>
        </div>
      </a>
    </motion.article>
  );
}

function ButtonLabel({ children }) {
  return (
    <span className="mt-8 inline-flex items-center gap-4 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#080d1f] shadow-xl shadow-black/20 transition group-hover:bg-violet-300">
      {children}

      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#080d1f] text-white transition group-hover:translate-x-1">
        <ArrowUpRight size={17} />
      </span>
    </span>
  );
}