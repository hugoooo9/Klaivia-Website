"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const TRAIL_COUNT = 14;

export default function NeonCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xTo = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3" });
    const rxTo = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
    const ryTo = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });

    const trailMovers = trailRefs.current.map((el, i) => {
      if (!el) return null;
      const dur = 0.3 + i * 0.05;
      return {
        x: gsap.quickTo(el, "x", { duration: dur, ease: "power3" }),
        y: gsap.quickTo(el, "y", { duration: dur, ease: "power3" }),
      };
    });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      rxTo(e.clientX);
      ryTo(e.clientY);
      trailMovers.forEach((m) => {
        if (!m) return;
        m.x(e.clientX);
        m.y(e.clientY);
      });
    };

    const onDown = () => {
      gsap.to(ring, { scale: 0.6, duration: 0.2, ease: "power2.out" });
    };
    const onUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.4)" });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")) {
        gsap.to(ring, { scale: 1.8, opacity: 0.9, duration: 0.25 });
      } else {
        gsap.to(ring, { scale: 1, opacity: 0.6, duration: 0.25 });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Trail dots */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          className="absolute top-0 left-0 rounded-full"
          style={{
            width: `${10 - (i * 0.5)}px`,
            height: `${10 - (i * 0.5)}px`,
            transform: "translate(-50%, -50%)",
            background: "rgba(192, 132, 252, " + (0.5 - i * 0.03) + ")",
            filter: "blur(6px)",
            mixBlendMode: "screen",
          }}
        />
      ))}
      {/* Glow ring */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 w-10 h-10 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.55) 0%, rgba(168,85,247,0) 70%)",
          mixBlendMode: "screen",
          opacity: 0.6,
        }}
      />
      {/* Core dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 w-2 h-2 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "#C084FC",
          boxShadow:
            "0 0 8px rgba(192,132,252,1), 0 0 18px rgba(168,85,247,0.8), 0 0 32px rgba(168,85,247,0.5)",
        }}
      />
    </div>
  );
}
