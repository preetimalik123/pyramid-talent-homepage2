"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Landmark,
  Radio,
  Zap,
  HeartPulse,
  ShieldCheck,
  FlaskConical,
  Factory,
  ShoppingCart,
  Cpu,
  CalendarDays,
  UserRoundPlus,
  BadgeDollarSign,
  Satellite,
  BriefcaseMedical,
  ClipboardCheck,
  Smartphone,
  ChevronDown,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const industryData = [
  {
    title: "Aviation & Transportation",
    icon: Plane,
    stats: [
      {
        icon: Plane,
        value: "Four",
        label: "of the largest airlines in the U.S. supported",
      },
      {
        icon: CalendarDays,
        value: "17 Years",
        label: "of serving aviation and transportation industry clients",
      },
      {
        icon: UserRoundPlus,
        value: "1500+",
        label: "Consultants engaged in the last three years",
      },
    ],
    description:
      "We leverage a strategic mix of onshore, nearshore, and offshore delivery to help you get the talent you need. Our adaptable and customized talent solutions minimize downtime, improve efficiency, and streamline operations both in the air and on the ground.",
  },
  {
    title: "Banking & Financial Services",
    icon: BadgeDollarSign,
    stats: [
      {
        icon: Landmark,
        value: "20+",
        label: "Banking and financial services industry leaders supported",
      },
      {
        icon: CalendarDays,
        value: "25 Years",
        label: "of serving banking and financial services industry clients",
      },
      {
        icon: UserRoundPlus,
        value: "5000+",
        label: "Consultants engaged in the last three years",
      },
    ],
    description:
      "We combine innovative technologies with a skills-first approach to meet your current and future demands for top talent, and provide a competitive edge. Our solutions ensure the success and safety of your banking and financial services business.",
  },
  {
    title: "Communications",
    icon: Radio,
    stats: [
      {
        icon: Satellite,
        value: "10+",
        label: "Communications industry leaders supported",
      },
      {
        icon: CalendarDays,
        value: "21 Years",
        label: "of serving communications industry clients",
      },
      {
        icon: UserRoundPlus,
        value: "2500+",
        label: "Consultants engaged in the last three years",
      },
    ],
    description:
      "We help you meet the talent requirements for building and maintaining vital infrastructures. Our solutions equip you with the top talent to lead the next generation of communication technologies and sustain network speeds and reliability.",
  },
  {
    title: "Energy & Natural Resources",
    icon: Zap,
    stats: [
      {
        icon: Zap,
        value: "Seven",
        label: "Energy & natural resources industry leaders supported",
      },
      {
        icon: CalendarDays,
        value: "10 Years",
        label: "serving the energy and natural resources industry since 2014",
      },
      {
        icon: UserRoundPlus,
        value: "600+",
        label: "Consultants engaged in the last three years",
      },
    ],
    description:
      "We help you navigate competitive markets and meet evolving industry demands in the decarbonization era. Our solutions accelerate the recruitment life cycle, ensuring the fast availability of talent and high retention through leading consultant care.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    stats: [
      {
        icon: BriefcaseMedical,
        value: "10+",
        label: "Healthcare industry leaders supported",
      },
      {
        icon: CalendarDays,
        value: "10 Years",
        label: "of serving healthcare industry clients",
      },
      {
        icon: UserRoundPlus,
        value: "5000+",
        label: "Consultants engaged in the last three years",
      },
    ],
    description:
      "We understand the unique needs of your healthcare business. Our workforce solutions help increase time efficiency, improve monitoring, and optimize customer service in an industry guided by the convergence of human judgment and scientific data.",
  },
  {
    title: "Insurance",
    icon: ShieldCheck,
    stats: [
      {
        icon: ClipboardCheck,
        value: "10+",
        label: "Insurance industry leaders supported",
      },
      {
        icon: CalendarDays,
        value: "20 Years",
        label: "of serving insurance industry clients",
      },
      {
        icon: UserRoundPlus,
        value: "3000+",
        label: "Consultants engaged in the last three years",
      },
    ],
    description:
      "We help you accelerate the recruitment lifecycle and navigate the evolving regulatory landscape in the insurance industry. Our market-driven, adaptable solutions help you hire top, qualified talent with the necessary skills and certifications.",
  },
  {
    title: "Life Sciences",
    icon: FlaskConical,
    stats: [
      {
        icon: BriefcaseMedical,
        value: "10+",
        label: "Life sciences industry leaders supported",
      },
      {
        icon: CalendarDays,
        value: "10 Years",
        label: "of serving life sciences industry clients",
      },
      {
        icon: UserRoundPlus,
        value: "1200+",
        label: "Consultants engaged in the last three years",
      },
    ],
    description:
      "Our commitment to leading consultant care and engagement ensures a high retention rate, helping you deliver high-quality care and medical advancements. Our specialized solutions provide top, vetted talent across various therapeutic areas.",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    stats: [
      {
        icon: Factory,
        value: "10",
        label: "Manufacturing industry leaders supported",
      },
      {
        icon: CalendarDays,
        value: "10 Years",
        label: "of serving manufacturing industry clients",
      },
      {
        icon: UserRoundPlus,
        value: "600+",
        label: "Consultants placed in the last three years",
      },
    ],
    description:
      "We help you improve operational efficiency and mitigate supply chain disruptions in the manufacturing industry. Our leading workforce solutions help you accelerate growth and succeed in the Fourth Industrial Revolution, or Industry 4.0.",
  },
  {
    title: "Retail",
    icon: ShoppingCart,
    stats: [
      {
        icon: Smartphone,
        value: "Eight",
        label: "Retail industry leaders supported",
      },
      {
        icon: CalendarDays,
        value: "20 Years",
        label: "of serving retail industry clients",
      },
      {
        icon: UserRoundPlus,
        value: "800+",
        label: "Consultants engaged in the last three years",
      },
    ],
    description:
      "We empower retailers to navigate digital disruption by delivering top-tier IT and engineering talent. From modernizing legacy systems to building intelligent supply chains and enhancing customer experiences, our solutions are built for agility and scale.",
  },
  {
    title: "Technology",
    icon: Cpu,
    stats: [
      {
        icon: Cpu,
        value: "15+",
        label: "Technology industry leaders supported",
      },
      {
        icon: CalendarDays,
        value: "28 Years",
        label: "serving the technology industry clients",
      },
      {
        icon: UserRoundPlus,
        value: "6000+",
        label: "Consultants engaged in the last three years",
      },
    ],
    description:
      "We help you keep pace with the rapid evolution of new technologies, address hiring challenges, and bridge skills gaps in the industry. Our workforce and talent solutions ensure successful project completion, innovation, and cost optimization.",
  },
];

export default function Industry() {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedIndustry = industryData[activeIndex] || industryData[0];

  return (
    <section
      id="industries"
      className="bg-[#080d1f] px-6 py-20 text-white sm:px-8 md:py-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between gap-6">
         
          <SectionTitle>Industries We Serve</SectionTitle>

          <a
            href="#contact"
            className="group hidden items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-white md:inline-flex"
          >
            Read More
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="hidden gap-8 lg:flex">
          <IndustryMenu activeIndex={activeIndex} onChange={setActiveIndex} />

          <motion.div
            key={selectedIndustry.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="min-w-0 flex-1"
          >
            <IndustryContent industry={selectedIndustry} />
          </motion.div>
        </div>

        <div className="space-y-4 lg:hidden">
          {industryData.map((industry, index) => (
            <IndustryAccordion
              key={industry.title}
              industry={industry}
              isOpen={activeIndex === index}
              onClick={() =>
                setActiveIndex((current) => (current === index ? -1 : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryMenu({ activeIndex, onChange }) {
  return (
    <aside className="w-[330px] shrink-0">
      <div className="rounded-3xl border border-white/10 bg-[#0c1228] p-3">
        {industryData.map((industry, index) => {
          const Icon = industry.icon;
          const isActive = activeIndex === index;

          return (
            <button
              key={industry.title}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(index)}
              className={getMenuItemClass(isActive)}
            >
              <span className={getMenuIconClass(isActive)}>
                <Icon size={20} strokeWidth={1.7} />
              </span>

              <span className="text-sm font-semibold leading-5">
                {industry.title}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function getMenuItemClass(isActive) {
  const baseClass =
    "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition";

  if (isActive) {
    return `${baseClass} bg-white text-[#080d1f]`;
  }

  return `${baseClass} text-white/60 hover:bg-white/[0.05] hover:text-white`;
}

function getMenuIconClass(isActive) {
  const baseClass =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl";

  if (isActive) {
    return `${baseClass} bg-violet-500 text-white`;
  }

  return `${baseClass} bg-white/[0.05] text-violet-300`;
}

function IndustryContent({ industry }) {
  const Icon = industry.icon;

  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1228] p-8">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
              <Icon size={30} strokeWidth={1.7} />
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-violet-300">
              Industry Focus
            </p>

            <h3 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              {industry.title}
            </h3>
          </div>

          <a
            href="#contact"
            className="group hidden shrink-0 items-center gap-2 rounded-full border border-violet-400/40 px-5 py-3 text-sm font-semibold text-violet-300 transition hover:border-violet-300 hover:bg-violet-500/10 hover:text-white md:inline-flex"
          >
            Talk to us
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>

        <p className="max-w-4xl text-base leading-8 text-white/65 md:text-lg">
          {industry.description}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {industry.stats.map((stat) => (
            <IndustryStat key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </article>
  );
}

function IndustryAccordion({ industry, isOpen, onClick }) {
  const Icon = industry.icon;

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0c1228]">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
            <Icon size={22} strokeWidth={1.7} />
          </span>

          <span className="text-base font-semibold leading-6">
            {industry.title}
          </span>
        </span>

        <ChevronDown
          size={20}
          className={`shrink-0 text-white/60 transition ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="border-t border-white/10 px-5 pb-5 pt-4"
        >
          <p className="text-sm leading-7 text-white/62">
            {industry.description}
          </p>

          <div className="mt-5 grid gap-4">
            {industry.stats.map((stat) => (
              <IndustryStat key={stat.label} stat={stat} />
            ))}
          </div>
        </motion.div>
      )}
    </article>
  );
}

function IndustryStat({ stat }) {
  const Icon = stat.icon;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-400/40 hover:bg-white/10">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-violet-300">
        <Icon size={22} strokeWidth={1.7} />
      </div>

      <p className="text-3xl font-semibold tracking-tight text-white">
        {stat.value}
      </p>

      <p className="mt-3 text-sm leading-6 text-white/58">{stat.label}</p>
    </div>
  );
}