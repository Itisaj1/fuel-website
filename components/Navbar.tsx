"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#workspaces", label: "Memberships" },
  { href: "/#events", label: "Events" },
  { href: "/mission", label: "Our mission" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <nav className="mx-auto flex h-14 max-w-[90rem] items-center justify-between px-6 lg:px-10 xl:px-12">
        <Link
          href="/"
          className="font-display text-xl font-bold uppercase leading-none tracking-tight text-dark"
        >
          FUEL
        </Link>

        <div className="hidden items-center xl:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-[15px] font-normal text-dark transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-7 flex items-center gap-5 border-l border-neutral-300 pl-7">
            <a
              href="#"
              className="font-body text-[15px] font-normal text-dark transition-opacity hover:opacity-70"
            >
              Member Login
            </a>
            <Link
              href="/#contact"
              className="font-body rounded-full bg-dark px-4 py-2 text-[15px] font-bold text-white transition-opacity hover:opacity-85"
            >
              Try a free day
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <Link
            href="/#contact"
            className="font-body hidden rounded-full bg-dark px-4 py-2 text-sm font-bold text-white sm:inline-block"
          >
            Try a free day
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-dark"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
                aria-hidden
              >
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
                aria-hidden
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-white xl:hidden">
          <ul className="px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body block py-3 text-[15px] text-dark"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-neutral-200 pt-3">
              <a
                href="#"
                className="font-body block py-3 text-[15px] text-dark"
                onClick={() => setOpen(false)}
              >
                Member Login
              </a>
            </li>
            <li>
              <Link
                href="/#contact"
                className="font-body mt-2 inline-block rounded-full bg-dark px-5 py-2.5 text-[15px] font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Try a free day
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
