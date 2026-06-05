"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Blogs", href: "#blogs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const actions = [
  { label: "Find Jobs", href: "#", isPrimary: false },
  { label: "Hire Talent", href: "#", isPrimary: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d1f]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 text-white">
        <a href="#" className="inline-flex items-center">
          <img
            src="https://pyramidci.com/wp-content/uploads/2025/08/Frame-1973341695.svg"
            alt="Pyramid Talent"
            width="180"
            height="32"
            className="h-9 w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {actions.map((action) => (
            <ActionLink
              key={action.label}
              href={action.href}
              isPrimary={action.isPrimary}
            >
              {action.label}
            </ActionLink>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#080d1f] px-6 py-5 text-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              {actions.map((action) => (
                <ActionLink
                  key={action.label}
                  href={action.href}
                  isPrimary={action.isPrimary}
                  onClick={closeMenu}
                  mobile
                >
                  {action.label}
                </ActionLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-white/65 transition hover:text-white"
    >
      {children}
    </a>
  );
}

function ActionLink({ href, isPrimary, mobile = false, onClick, children }) {
  const baseClass = mobile
    ? "rounded-xl px-5 py-3 text-center text-sm font-semibold transition"
    : "rounded-full px-5 py-3 text-sm font-semibold transition";

  const styleClass = isPrimary
    ? "bg-violet-700 text-white hover:bg-violet-600"
    : "border border-white/15 text-white/75 hover:border-violet-400/50 hover:text-white";

  return (
    <a href={href} onClick={onClick} className={`${baseClass} ${styleClass}`}>
      {children}
    </a>
  );
}