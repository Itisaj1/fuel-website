import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUEL Coworking | Fuel Your Next Big Idea",
  description:
    "Big ideas don't happen in isolation. A community-first coworking space in Spokane, WA for founders, freelancers, and forward-thinkers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body bg-cream text-dark antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
