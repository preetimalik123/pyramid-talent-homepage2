"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#080d1f] px-6 py-20 text-white sm:px-8 md:py-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1228]"
        >
          <Background />

          <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div className="max-w-3xl">
             
              <SectionTitle> Let's build together</SectionTitle>

              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl mt-5">
                We can transform the future, together
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                Let&apos;s collaborate to nurture people-centric solutions that
                match your needs, culture, and goals.
              </p>
            </div>

            <ContactButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-violet-500/10" />
      <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
      <div className="absolute -bottom-28 left-16 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
    </>
  );
}

function ContactButton() {
  return (
    <a
      href="#"
      className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#080d1f] shadow-xl shadow-black/25 transition hover:bg-violet-300 lg:px-6 lg:py-4"
    >
      Contact Us

      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#080d1f] text-white transition group-hover:translate-x-1">
        <ArrowUpRight size={17} />
      </span>
    </a>
  );
}