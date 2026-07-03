import { projects } from "../data/content";
import { Tag } from "./ui/Tag";
import { CardMedia } from "./ui/CardMedia";
import { SectionHeading } from "./ui/SectionHeading";

export function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 bg-secondary py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          index="01"
          kicker="Featured Projects"
          title="Full-stack work, shipped."
          description="Full-stack apps I built end-to-end — schema and API through interface and deploy. Several ran live on AWS during coursework and are now archived to avoid ongoing hosting costs; source and demos are available on request."
        />

        {featured && (
          <div
            className={`mb-6 grid overflow-hidden rounded-lg border border-line bg-elevated shadow-sm ${
              featured.image ? "md:grid-cols-2" : ""
            }`}
          >
            {featured.image && (
              <div className="relative">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-white">
                  Featured
                </span>
                <CardMedia
                  src={featured.image}
                  alt={featured.title}
                  className="aspect-[16/10] h-full"
                />
              </div>
            )}
            <div className="flex flex-col gap-3 p-7">
              {!featured.image && (
                <span className="w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-white">
                  Featured
                </span>
              )}
              <span className="font-mono text-xs tracking-wide text-ink-tertiary uppercase">
                {featured.category} · {featured.year}
              </span>
              <h3 className="m-0 text-2xl font-semibold tracking-tight text-ink">
                {featured.title}
              </h3>
              <p className="m-0 text-[15px] leading-relaxed text-ink-secondary">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2 py-1">
                {featured.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-4 text-sm">
                {featured.caseStudyUrl && (
                  <a href={featured.caseStudyUrl} className="font-medium text-accent-ink">
                    Case study →
                  </a>
                )}
                {featured.videoUrl && (
                  <a
                    href={featured.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent-ink"
                  >
                    Watch demo ↗
                  </a>
                )}
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ink-secondary"
                  >
                    GitHub ↗
                  </a>
                )}
                {featured.demoStatus === "archived" && (
                  <span className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-tertiary">
                    Demo archived
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-lg border border-line bg-elevated shadow-sm"
            >
              <CardMedia src={project.image} alt={project.title} className="aspect-video" />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="font-mono text-xs tracking-wide text-ink-tertiary uppercase">
                  {project.category} · {project.year}
                </span>
                <h3 className="m-0 text-xl font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="m-0 text-[15px] leading-relaxed text-ink-secondary">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 py-1">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-1 text-sm">
                  {project.caseStudyUrl && (
                    <a href={project.caseStudyUrl} className="font-medium text-accent-ink">
                      Case study →
                    </a>
                  )}
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent-ink"
                    >
                      Watch demo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-ink-secondary"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
