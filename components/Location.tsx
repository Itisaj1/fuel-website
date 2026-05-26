import Image from "next/image";

const PLACEHOLDER_IMAGE = "/images/placeholder.png";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=809+W+Main+Ave+Suite+212+Spokane+WA+99201";

const details = [
  {
    label: "Address",
    value: "809 W Main Ave, Suite 212\nSpokane, WA 99201",
  },
  {
    label: "Hours",
    value: "Monday – Friday · 8:00 AM – 6:00 PM\nSaturday · 9:00 AM – 2:00 PM",
  },
  {
    label: "Parking",
    value: "Street and garage parking nearby in downtown Spokane.",
  },
];

export default function Location() {
  return (
    <section id="location" className="bg-cream px-6 py-12 lg:px-10 lg:py-16 xl:px-12">
      <div className="mx-auto max-w-site">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
              find us in spokane
            </h2>
            <p className="font-body mt-5 max-w-lg text-[15px] leading-relaxed text-dark md:text-base">
              FUEL sits in the heart of downtown — walkable cafes, riverfront trails,
              and a growing community of makers and founders right outside the door.
            </p>

            <dl className="mt-8 space-y-5">
              {details.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-xs font-medium uppercase tracking-wide text-primary">
                    {item.label}
                  </dt>
                  <dd className="font-body mt-1 whitespace-pre-line text-[15px] leading-relaxed text-dark md:text-base">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-[15px] font-bold text-cream transition-opacity hover:opacity-90"
            >
              Get directions
            </a>
          </div>

          <div className="relative min-h-[280px] overflow-hidden border border-dark/10 sm:min-h-[360px] lg:min-h-[420px]">
            <Image
              src={PLACEHOLDER_IMAGE}
              alt="Map placeholder for FUEL Coworking in downtown Spokane"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-dark/20" aria-hidden />
            <p className="font-display absolute bottom-4 left-4 text-sm font-bold text-cream md:text-base">
              Downtown Spokane
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
