const workspaces = [
  {
    title: "Hot Desk",
    description: "Flexible day passes and monthly memberships for nomadic workers.",
  },
  {
    title: "Dedicated Desk",
    description: "Your own desk in our open-plan area with 24/7 access.",
  },
  {
    title: "Private Office",
    description: "Lockable offices for teams of 2–12 with custom branding options.",
  },
];

export default function Workspaces() {
  return (
    <section id="workspaces" className="bg-dark px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold text-cream">Workspaces</h2>
        <p className="mt-4 max-w-xl text-cream/70">
          Choose the setup that fits how you work today — and scale as you grow.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {workspaces.map((space) => (
            <article
              key={space.title}
              className="rounded-2xl border border-cream/10 bg-cream/5 p-8"
            >
              <h3 className="font-display text-2xl font-bold text-primary">
                {space.title}
              </h3>
              <p className="mt-4 text-cream/70">{space.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
