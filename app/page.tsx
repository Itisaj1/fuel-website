import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Workspaces from "@/components/Workspaces";
import Location from "@/components/Location";
import Events from "@/components/Events";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cream">
      <Navbar />
      <Hero />
      <Intro />
      <Workspaces />
      <Location />
      <Events />
      <Mission />
      <Contact />
      <Footer />
    </main>
  );
}
