"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-oat bg-paper/85 backdrop-blur dark:border-pine-line dark:bg-pine/85">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3"
      >
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <span className="text-lilac-deep dark:text-lilac">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-pine-soft transition-colors hover:text-lilac-deep dark:text-oat/75 dark:hover:text-lilac"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-full p-2 text-pine-soft hover:bg-oat dark:text-oat dark:hover:bg-pine-line md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-oat px-6 py-2 dark:border-pine-line md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm font-medium text-pine-soft dark:text-oat/80"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
