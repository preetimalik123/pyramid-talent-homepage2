"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const stats = [
  { value: 400, suffix: "+", label: "Enterprise Clients" },
  { value: 800, suffix: "+", label: "Recruiters" },
  { value: 10000, suffix: "+", label: "Annual Placements" },
  { value: 95, suffix: "%", label: "Assignment Completion Rate" },
];

function useInViewOnce(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setInView(true);
        observer.disconnect();
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [inView, threshold]);

  return [ref, inView];
}

export default function Stats() {
  const [sectionRef, inView] = useInViewOnce();

  return (
    <section
      ref={sectionRef}
      className="bg-[#080d1f] px-6 py-16 text-white sm:px-8 md:py-20 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0c1228] px-6 py-10 md:px-10 lg:px-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-[360px] lg:shrink-0">
             
                 <SectionTitle> Our Impact</SectionTitle>

              <p className="text-3xl font-semibold tracking-tight md:text-5xl mt-5">
                Pyramid Talent by the Numbers
              </p>
              
              
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:flex-1">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} start={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, start }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-violet-400/40 hover:bg-white/[0.055]">
      <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {start ? (
          <CountUp end={stat.value} duration={2} separator="," />
        ) : (
          "0"
        )}
        {stat.suffix}
      </h3>

      <p className="mt-3 text-sm font-medium uppercase leading-6 tracking-[0.12em] text-white/50">
        {stat.label}
      </p>
    </article>
  );
}