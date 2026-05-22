export default function Footer() {
  return (
    <footer className="border-t border-dark/10 bg-dark px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-display text-xl font-bold text-cream">Fuel</p>
        <p className="text-sm text-cream/50">
          &copy; {new Date().getFullYear()} Fuel Coworking. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-cream/70">
          <a href="#" className="hover:text-primary transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
