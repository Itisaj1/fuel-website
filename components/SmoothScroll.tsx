"use client";

import { useEffect } from "react";

function findScrollableAncestor(el: HTMLElement): Element | null {
  let node: Element | null = el;

  while (node && node !== document.body) {
    const element = node as HTMLElement;
    const style = getComputedStyle(element);
    const canScrollY =
      (style.overflowY === "auto" || style.overflowY === "scroll") &&
      element.scrollHeight > element.clientHeight;
    const canScrollX =
      (style.overflowX === "auto" || style.overflowX === "scroll") &&
      element.scrollWidth > element.clientWidth;

    if (canScrollY || canScrollX) return node;
    node = node.parentElement;
  }

  return null;
}

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    let targetY = window.scrollY;
    let currentY = window.scrollY;
    const lerp = 0.1;

    const tick = () => {
      currentY += (targetY - currentY) * lerp;

      if (Math.abs(targetY - currentY) < 0.25) {
        currentY = targetY;
      }

      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const maxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const onWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest(".events-scroll-mask")) return;
      if (findScrollableAncestor(target)) return;

      e.preventDefault();
      targetY = Math.max(0, Math.min(maxScroll(), targetY + e.deltaY));
    };

    const onScroll = () => {
      if (Math.abs(window.scrollY - currentY) > 1) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
