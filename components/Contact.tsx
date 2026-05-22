export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-4xl font-bold text-dark">Get in touch</h2>
        <p className="mt-4 text-dark/70">
          Ready to see the space? Book a tour or drop us a line.
        </p>
        <form className="mt-10 space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-dark/20 bg-white px-4 py-3 outline-none focus:border-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-dark/20 bg-white px-4 py-3 outline-none focus:border-primary"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your team"
            className="w-full rounded-lg border border-dark/20 bg-white px-4 py-3 outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-dark py-3 font-medium text-cream transition-colors hover:bg-orange"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
