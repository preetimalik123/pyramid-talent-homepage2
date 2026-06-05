"use client";

import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas";

const heroLinks = [
  { label: "Find Jobs", href: "#jobs", variant: "primary" },
  { label: "Hire Talent", href: "#hire", variant: "secondary" },
];

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#080d1f] text-white">
      <div className="mx-auto flex max-w-7xl items-center lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative z-10 w-full lg:w-[520px] lg:shrink-0 p-10 md:pl-20"
        >
        

          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
           Creating Greater Value for All, Together
          </h1>

          <p className="mt-6 text-base font-normal text-violet-300">
           We connect industry leaders with the best talent across the globe and ensure they are the best fit for each other.
          </p>

        

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            {heroLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.variant === "primary"
                    ? "rounded-xl bg-violet-500 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-violet-400"
                    : "rounded-xl border border-violet-400/60 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-violet-400/10"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="hero-gradient relative hidden h-[560px] flex-1 lg:block">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
}