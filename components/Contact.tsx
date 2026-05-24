"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import {
  submitContact,
  type ContactState,
} from "@/app/actions/contact";

const initialState: ContactState = { success: false, error: null };

const interestOptions = [
  "Hot desk",
  "Dedicated desk",
  "Private office",
  "Free day pass",
  "Events & community",
];

const inlineInputClass =
  "font-body inline-block min-w-[10rem] max-w-full border-0 border-b border-dark/25 bg-transparent px-1 py-0.5 text-dark outline-none transition-colors placeholder:text-dark/35 focus:border-primary sm:min-w-[14rem]";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="font-display mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[15px] font-normal text-cream transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send my request"}
      {!pending && <span aria-hidden>→</span>}
    </button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(submitContact, initialState);
  const [interests, setInterests] = useState<string[]>([]);
  const [interestError, setInterestError] = useState<string | null>(null);

  const toggleInterest = (option: string) => {
    setInterests((prev) => {
      const next = prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option];
      if (next.length > 0) setInterestError(null);
      return next;
    });
  };

  const handleSubmit = (formData: FormData) => {
    if (interests.length === 0) {
      setInterestError("Pick at least one option above.");
      return;
    }
    setInterestError(null);
    formData.set("interests", interests.join(", "));
    formAction(formData);
  };

  return (
    <section id="contact" className="bg-cream px-6 py-10 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-site">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-bold text-dark md:text-5xl">
            Let&apos;s fuel your next move
            <span className="text-primary">.</span>
          </h2>

          {state.success ? (
            <p
              role="status"
              className="font-body mt-8 text-xl leading-relaxed text-dark/80"
            >
              Thanks for reaching out — we&apos;ll be in touch soon. Your next idea
              takes off from here.
            </p>
          ) : (
            <form action={handleSubmit} className="mt-8">
              {(state.error || interestError) && (
                <p
                  role="alert"
                  className="font-body mb-6 rounded-lg bg-primary/10 px-4 py-3 text-sm text-dark"
                >
                  {interestError ?? state.error}
                </p>
              )}

              <div className="space-y-8">
                <p className="font-body text-xl leading-relaxed text-dark md:text-2xl md:leading-relaxed">
                  My name is{" "}
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="first & last name"
                    className={inlineInputClass}
                  />{" "}
                  and I&apos;m building with{" "}
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="company or solo"
                    className={inlineInputClass}
                  />
                  .
                </p>

                <div>
                  <p className="font-body text-xl leading-relaxed text-dark md:text-2xl md:leading-relaxed">
                    I want to join FUEL for{" "}
                    <span className="text-dark/60">(pick at least one)</span>
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {interestOptions.map((option) => {
                      const selected = interests.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleInterest(option)}
                          className={`font-body rounded-full border px-4 py-2 text-[15px] transition-colors ${
                            selected
                              ? "border-primary bg-primary/10 text-dark"
                              : "border-dark/20 bg-white/60 text-dark hover:border-dark/40"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <p className="font-body text-xl leading-relaxed text-dark md:text-2xl md:leading-relaxed">
                  You can reach me at{" "}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email address"
                    className={inlineInputClass}
                  />
                  .
                </p>

                <p className="font-body text-xl leading-relaxed text-dark md:text-2xl md:leading-relaxed">
                  Or call me at{" "}
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="phone number (optional)"
                    className={inlineInputClass}
                  />
                  .
                </p>

                <p className="font-body text-xl leading-relaxed text-dark md:text-2xl md:leading-relaxed">
                  Here&apos;s what I&apos;m working on:{" "}
                  <input
                    id="message"
                    name="message"
                    type="text"
                    placeholder="your project, team, or goals"
                    className={`${inlineInputClass} min-w-[16rem] sm:min-w-[20rem]`}
                  />
                  .
                </p>
              </div>

              <SubmitButton />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
