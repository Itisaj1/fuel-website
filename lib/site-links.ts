import Link from "next/link";

export const footerNavLinks = [
  { href: "/#workspaces", label: "Memberships" },
  { href: "/#events", label: "Events" },
  { href: "/mission", label: "Our mission" },
  { href: "/#contact", label: "Contact" },
];

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

export function FooterNavButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="font-body inline-flex rounded-full border border-cream/25 px-4 py-2 text-[15px] text-cream transition-colors hover:border-cream/50 hover:bg-cream/10"
    >
      {label}
    </Link>
  );
}
