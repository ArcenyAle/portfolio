import { profile } from "../data/content";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-line bg-secondary">
      <div className="mx-auto max-w-[1120px] px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[13px] tracking-wide text-accent-ink">
              05 · Contact
            </span>
            <h2 className="m-0 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Let&rsquo;s build something.
            </h2>
            <p className="m-0 max-w-xl text-lg leading-relaxed text-ink-secondary">
              Open to full-time software engineering roles. The fastest way to
              reach me is the form up top — or any of these directly.
            </p>
          </div>
          <a
            href="#top"
            className="inline-flex h-11 items-center rounded-md bg-accent px-5 text-sm font-medium text-white no-underline shadow-xs transition-colors duration-150 hover:bg-accent-hover"
          >
            Back to top ↑
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <ContactLink label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactLink
            label="LinkedIn"
            value={profile.linkedinLabel}
            href={profile.linkedin}
            external
          />
          <ContactLink
            label="GitHub"
            value={profile.githubLabel}
            href={profile.github}
            external
          />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1120px] flex-col items-start gap-2 px-6 py-6 text-sm text-ink-tertiary sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2 font-medium text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.name}
          </span>
          <span>
            Full-Stack Developer · XR Engineer · {profile.school}
          </span>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center justify-between gap-3 rounded-md border border-line bg-elevated px-4 py-3 text-sm no-underline transition-colors duration-150 hover:border-line-strong"
    >
      <span className="font-mono text-xs tracking-wide text-ink-tertiary uppercase">
        {label}
      </span>
      <span className="font-medium text-ink">
        {value} {external && "↗"}
      </span>
    </a>
  );
}
