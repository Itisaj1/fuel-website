import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <main className="bg-cream">
      <Navbar />
      <article className="px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-28 xl:px-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            {title}
          </h1>
          <div className="font-body mt-8 space-y-5 text-[15px] leading-relaxed text-dark/85 md:text-base">
            {children}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
