"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["spokane", "local", "community", "neighbourhood"],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 2200,
      loop: true,
      showCursor: false,
      smartBackspace: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative h-[68vh] min-h-[480px] md:h-[72vh] md:min-h-[560px] lg:min-h-[620px]">
      <Image
        src="/images/hero.jpg"
        alt="FUEL coworking — white letters on a wooden table"
        fill
        priority
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="absolute inset-0 z-10 mx-auto flex h-full max-w-site flex-col justify-between px-6 pb-8 pt-20 lg:px-10 lg:pb-10 xl:px-12">
        <div>
          <h1 className="max-w-[11ch] font-display text-[clamp(2.75rem,9vw,7.25rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
            Your{" "}
            <span ref={typedRef} className="text-primary" />
            <br />
            workspace
          </h1>
          <p className="font-body mt-5 max-w-sm text-base font-normal text-white md:text-lg">
            Work, commUNITY, and connection
          </p>
        </div>

        <a
          href="#contact"
          className="font-body w-fit rounded-full bg-white px-6 py-3 text-[15px] font-normal text-dark transition-opacity hover:opacity-90"
        >
          Try a free day
        </a>
      </div>
    </section>
  );
}
