import {
  Handshake,
  ShieldCheck,
  UserCheck,
  UsersRound,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "Contract & Contract-to-hire",
    description:
      "Hire top talent to augment workforce for project needs and offer full-time roles upon skills review.",
    icon: Handshake,
  },
  {
    title: "Direct hire",
    description:
      "Fill full-time roles with hard-to-find talent sourced from a global pool and focus on core business.",
    icon: UserCheck,
  },
  {
    title: "Teams as a Service",
    description:
      "Deploy a team with specialized skills to manage projects, increase efficiency, and reduce workload.",
    icon: UsersRound,
  },
  {
    title: "Employer of record",
    description:
      "Manage staffing needs with a single point of contact to simplify process, automate onboarding, and ensure compliance.",
    icon: ShieldCheck,
  },
];

export default function Service() {
  return (
    <section
      id="services"
      className="bg-[#080d1f] px-6 py-20 text-white sm:px-8 md:py-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="lg:sticky lg:top-28 lg:w-[360px] lg:shrink-0">
           
              <SectionTitle> Our Services</SectionTitle>

            <p className="text-3xl font-semibold tracking-tight md:text-5xl mt-5">
              With us, you gain more than access to talent
            </p>

            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-violet-400/40 px-5 py-3 text-sm font-semibold text-violet-300 transition hover:border-violet-300 hover:bg-violet-500/10 hover:text-white"
            >
              View details
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="grid flex-1 gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1228] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/0 blur-3xl transition group-hover:bg-violet-500/20" />

      <div className="relative z-10">
        <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 transition group-hover:bg-violet-500/25 group-hover:text-white">
          <Icon size={26} strokeWidth={1.7} />
        </div>

        <h3 className="max-w-sm text-2xl font-semibold tracking-tight">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/58">
          {service.description}
        </p>
      </div>
    </article>
  );
}