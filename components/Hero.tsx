"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["cowork.", "create.", "connect.", "fuel."],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="flex min-h-screen items-center justify-center bg-dark px-6 pt-24">
      <div className="max-w-4xl text-center">
        <h1 className="font-display text-5xl font-bold leading-tight text-cream md:text-7xl">
          A space to{" "}
          <span ref={typedRef} className="text-primary" />
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-cream/70">
          Fuel is a coworking space built for makers, founders, and creative teams
          who need more than a desk.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-primary px-8 py-3 font-medium text-cream transition-colors hover:bg-orange"
        >
          Get started
        </a>
      </div>
    </section>
  );
}
