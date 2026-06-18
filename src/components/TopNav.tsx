"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-neutral-300/40">
      <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="font-display text-2xl tracking-tight">
          Harsh's Space 👾
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="underline underline-offset-4 hover:opacity-70 transition"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-300/40">
          <div className="mx-auto max-w-3xl px-6 py-4 flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="underline underline-offset-4"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}