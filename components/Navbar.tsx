export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-dark/10 bg-cream/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold text-dark">
          Fuel
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          <li>
            <a href="#workspaces" className="hover:text-primary transition-colors">
              Workspaces
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-primary transition-colors">
              Events
            </a>
          </li>
          <li>
            <a href="#mission" className="hover:text-primary transition-colors">
              Mission
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-orange"
        >
          Book a tour
        </a>
      </nav>
    </header>
  );
}
