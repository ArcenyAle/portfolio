import { experience } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 bg-primary py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          index="04"
          kicker="Experience"
          title="Where I've built."
          description="Roles across frontend product work, backend engineering, and applied XR."
        />

        <ol className="flex flex-col gap-10 border-l border-line pl-8">
          {experience.map((item) => (
            <li key={`${item.title}-${item.org}`} className="relative">
              <span
                className={`absolute -left-[41px] top-1 h-2.5 w-2.5 rounded-full ${
                  item.current ? "bg-accent shadow-[0_0_0_3px_var(--color-accent-soft)]" : "border-2 border-line-strong bg-primary"
                }`}
              />
              <span className="font-mono text-xs tracking-wide text-ink-tertiary">
                {item.period}
              </span>
              <h3 className="m-0 mt-1 text-lg font-semibold tracking-tight text-ink">
                {item.title} <span className="font-normal text-ink-tertiary">· {item.org}</span>
              </h3>
              <ul className="mt-2 flex flex-col gap-1.5">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="list-disc pl-1 text-[15px] leading-relaxed text-ink-secondary marker:text-ink-tertiary"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
