import HeroCanvas from "./HeroCanvas";

const heroLinks = [
  { label: "Find Jobs", href: "#jobs", variant: "primary" },
  { label: "Hire Talent", href: "#hire", variant: "secondary" },
];

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#080d1f] text-white">
      <div className="mx-auto flex max-w-7xl items-center lg:flex-row">
        <div className="relative z-10 w-full p-10 lg:w-[520px] lg:shrink-0 lg:pl-20 2xl:pl-0">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Creating Greater Value for All, Together
          </h1>

          <p className="mt-6 text-base font-normal text-violet-300">
            We connect industry leaders with the best talent across the globe
            and ensure they are the best fit for each other.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            {heroLinks.map((link) => (
              <HeroLink key={link.label} link={link} />
            ))}
          </div>
        </div>

        <div className="hero-gradient relative hidden h-[560px] flex-1 lg:block">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
}

function HeroLink({ link }) {
  const isPrimary = link.variant === "primary";

  const className = isPrimary
    ? "bg-violet-700 text-white hover:bg-violet-600"
    : "border border-violet-400/60 text-white hover:bg-violet-400/10";

  return (
    <a
      href={link.href}
      className={`rounded-xl px-7 py-4 text-center text-sm font-semibold transition ${className}`}
    >
      {link.label}
    </a>
  );
}