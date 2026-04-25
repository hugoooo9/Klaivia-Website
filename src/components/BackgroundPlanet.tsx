"use client";

import { useEffect } from "react";

export default function BackgroundPlanet() {
  // Hide Spline watermark inside shadow DOM
  useEffect(() => {
    const hide = () => {
      const sv = document.querySelector("spline-viewer");
      if (sv?.shadowRoot) {
        const logo = sv.shadowRoot.querySelector("#logo");
        if (logo) (logo as HTMLElement).style.display = "none";
        sv.shadowRoot.querySelectorAll("div").forEach((d) => {
          if (d.textContent?.includes("Built with"))
            d.style.display = "none";
        });
      }
    };
    const interval = setInterval(hide, 500);
    const timeout = setTimeout(() => clearInterval(interval), 10000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
    {/* Solid base layer — replaces body bg-noir-profond */}
    <div className="fixed inset-0 -z-20 bg-noir-profond pointer-events-none" />
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* @ts-expect-error - spline-viewer is a web component loaded via external script */}
      <spline-viewer
        url="https://prod.spline.design/tFl0vR7Y1VTo6wjF/scene.splinecode"
        loading-anim-type="none"
        logo="false"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-noir-profond/60" />
      {/* Violet glow blend */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-principal/10 blur-[120px]" />
    </div>
    </>
  );
}
