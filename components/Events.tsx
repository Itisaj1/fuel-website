export default function Events() {
  return (
    <section id="events" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold text-dark">Events</h2>
        <p className="mt-4 max-w-xl text-dark/70">
          Weekly workshops, founder dinners, and community meetups — all included
          with your membership.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-dark/10 bg-white p-8">
            <p className="text-sm font-medium text-primary">Every Tuesday</p>
            <h3 className="mt-2 font-display text-2xl font-bold">Founder Breakfast</h3>
            <p className="mt-3 text-dark/70">
              Start the week with coffee and candid conversations with fellow builders.
            </p>
          </article>
          <article className="rounded-2xl border border-dark/10 bg-white p-8">
            <p className="text-sm font-medium text-primary">Monthly</p>
            <h3 className="mt-2 font-display text-2xl font-bold">Demo Night</h3>
            <p className="mt-3 text-dark/70">
              Members showcase what they&apos;re building to the community and guests.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
