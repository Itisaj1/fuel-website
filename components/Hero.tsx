"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["workspace", "community", "launchpad", "idea", "hub"],
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
    <section className="relative h-[85vh] min-h-[560px] md:h-[90vh] md:min-h-[640px]">
      <Image
        src="/images/hero.jpg"
        alt="FUEL coworking — white letters on a wooden table"
        fill
        priority
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />

      <div className="absolute inset-0 z-10 mx-auto max-w-site px-6 pt-16 lg:px-10 xl:px-12">
        <h1 className="max-w-4xl font-display text-[3.25rem] font-normal lowercase leading-[1.08] tracking-normal text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem]">
          <span className="block">
            <span className="text-primary">your </span>
            <span ref={typedRef} />_
          </span>
          <span className="block">in spokane.</span>
        </h1>
      </div>
    </section>
  );
}
