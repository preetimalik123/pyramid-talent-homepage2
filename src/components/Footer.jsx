const footerColumns = [
  {
    title: "Talent",
    links: [
      { label: "For Job Seekers", href: "#" },
      { label: "For Employers", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Resources", href: "#blogs" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

const legalLinks = [
  "GDPR",
  "CCPA/CCRA",
  "Privacy",
  "Reasonable Accommodation Policy",
  "Web Accessibility",
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080d1f] px-6 pb-8 pt-16 text-white sm:px-8 lg:px-12 xl:px-20">
      <FooterGlow />

      <div className="relative z-10 mx-auto max-w-7xl border-t border-white/10 pt-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <a
              href="#"
              className="inline-flex text-2xl font-semibold tracking-tight"
            >
              Pyramid Talent
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/85">
              Global talent solutions designed to connect industry leaders with
              skilled professionals across the world.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} link={link} />
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <FooterColumn key={column.title} column={column} />
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-white/85">
              © 2026 Pyramid Consulting, Inc. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-white/85 transition hover:text-violet-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ column }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-violet-300">
        {column.title}
      </h3>

      <ul className="mt-5 space-y-3">
        {column.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-white/85 transition hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ link }) {
  return (
    <a
      href={link.href}
      aria-label={link.label}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 transition hover:border-violet-300/50 hover:bg-violet-500/15 hover:text-white"
    >
      {link.label}
    </a>
  );
}

function FooterGlow() {
  return (
    <>
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
    </>
  );
}