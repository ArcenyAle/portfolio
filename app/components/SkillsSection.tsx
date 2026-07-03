import { skillGroups } from "../data/content";
import { Tag } from "./ui/Tag";
import { SectionHeading } from "./ui/SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 bg-secondary py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading index="03" kicker="Skills" title="Tech stack." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col gap-3 rounded-lg border border-line bg-elevated p-5 shadow-sm"
            >
              <span className="font-mono text-xs tracking-wide text-accent-ink uppercase">
                {group.title}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
