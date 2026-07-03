"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import meImage from "../me.jpeg";
import { profile } from "../data/content";
import { ThemeToggle } from "./ThemeToggle";

const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "xr", label: "XR / VR" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
] as const;

export function Navbar() {
  const [active, setActive] = useState<string>("top");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const seen = new Map<string, number>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => seen.set(entry.target.id, entry.intersectionRatio));
        let best = "top";
        let bestRatio = -1;
        SECTIONS.forEach(({ id }) => {
          const ratio = seen.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (bestRatio > 0) setActive(best);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    observerRef.current = io;
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-primary/[0.82] backdrop-blur-md backdrop-saturate-150">
      <nav className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-6 px-6">
        {/* Left: profile + contact link */}
        <a
          href="#top"
          aria-label="Contact me"
          className="inline-flex items-center gap-2.5 text-ink no-underline"
        >
          <Image
            src={meImage}
            alt={profile.name}
            width={34}
            height={34}
            priority
            className="h-[34px] w-[34px] rounded-full border border-line-strong object-cover shadow-xs [object-position:center_20%]"
          />
          <span className="inline-flex flex-col leading-[1.15]">
            <span className="font-mono text-[13px] font-semibold tracking-tight text-ink">
              {profile.name}
            </span>
            <span className="text-[11px] text-ink-tertiary">Contact me →</span>
          </span>
        </a>

        {/* Center: section links */}
        <ul className="hidden list-none items-center gap-6 sm:flex">
          {SECTIONS.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`border-b-2 pb-1.5 text-sm font-medium no-underline transition-colors duration-150 ${
                    isActive
                      ? "border-accent text-accent-ink"
                      : "border-transparent text-ink-secondary hover:text-ink"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: theme toggle + résumé */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex h-9 items-center gap-2 rounded-md bg-accent px-3.5 text-[13px] font-medium tracking-tight text-white no-underline shadow-xs transition-colors duration-150 hover:bg-accent-hover"
            >
              Download Résumé
            </a>
          ) : (
            <span
              aria-disabled="true"
              title="Résumé coming soon"
              className="inline-flex h-9 cursor-not-allowed items-center gap-2 rounded-md bg-secondary px-3.5 text-[13px] font-medium tracking-tight text-ink-tertiary"
            >
              Download Résumé
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}
