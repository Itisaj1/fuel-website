import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const pillars = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Dolor sit amet",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Consectetur elit",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Adipiscing tempor",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function MissionPage() {
  return (
    <main className="bg-cream">
      <Navbar />
      <section className="px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-28 xl:px-12">
        <div className="mx-auto max-w-site">
          <p className="font-display text-sm font-medium uppercase tracking-wide text-primary">
            Lorem ipsum dolor
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
            Our mission
          </h1>
          <p className="font-display mt-6 max-w-2xl text-xl font-bold text-dark md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-8 max-w-2xl space-y-5">
            <p className="font-body text-[15px] leading-relaxed text-dark md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p className="font-body text-[15px] leading-relaxed text-dark md:text-base">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <article key={pillar.title}>
                <h2 className="font-display text-lg font-bold text-dark">
                  {pillar.title}
                </h2>
                <p className="font-body mt-2 text-[15px] leading-relaxed text-dark/75">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/#contact"
            className="font-display mt-12 inline-block rounded-full bg-primary px-8 py-3.5 text-[15px] font-bold text-cream transition-opacity hover:opacity-90"
          >
            Join the community
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
