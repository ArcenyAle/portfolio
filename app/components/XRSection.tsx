import { xrProjects } from "../data/content";
import { Tag } from "./ui/Tag";
import { CardMedia } from "./ui/CardMedia";
import { SectionHeading } from "./ui/SectionHeading";

export function XRSection() {
  return (
    <section id="xr" className="scroll-mt-20 bg-primary py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          index="02"
          kicker="XR / VR"
          title="Immersive systems."
          description="Leading VR experiences from concept to headset — interaction design, engineering, and delivery."
        />

        <div className="flex flex-col gap-6">
          {xrProjects.map((project) => (
            <div
              key={project.id}
              className={`grid overflow-hidden rounded-lg border border-line bg-elevated shadow-sm ${
                project.image ? "md:grid-cols-[280px_1fr]" : ""
              }`}
            >
              <CardMedia
                src={project.image}
                alt={project.title}
                className="aspect-video md:aspect-auto"
              />
              <div className="flex flex-col gap-2.5 p-6">
                <span className="font-mono text-xs tracking-wide text-ink-tertiary uppercase">
                  {project.role}
                </span>
                <h3 className="m-0 text-xl font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="m-0 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-sm">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-accent-ink"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
