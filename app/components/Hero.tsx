import Image from "next/image";
import meImage from "../me.jpeg";
import { profile } from "../data/content";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon } from "./ui/icons";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 border-b border-line bg-primary">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-14 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-18 md:py-24">
        {/* Left: intro */}
        <div className="flex animate-fade-up flex-col gap-6">
          <Image
            src={meImage}
            alt={profile.name}
            width={88}
            height={88}
            priority
            className="h-[88px] w-[88px] rounded-full border border-line-strong object-cover shadow-sm [object-position:center_18%]"
          />

          <span className="inline-flex w-fit items-center gap-2 font-mono text-[13px] tracking-wide text-accent-ink uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_var(--color-accent-soft)]" />
            {profile.availability}
          </span>

          <h1 className="m-0 text-hero font-semibold tracking-tight text-ink">
            {profile.name}
          </h1>

          <p className="m-0 font-mono text-[15px] tracking-tight text-ink-secondary">
            {profile.roles.map((role, i) => (
              <span key={role}>
                {i > 0 && <span className="text-ink-tertiary"> | </span>}
                {role}
              </span>
            ))}
          </p>

          <p className="m-0 max-w-[480px] text-lead text-ink-secondary">
            {profile.bio}
          </p>

          <div className="mt-1 flex items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4.5 text-sm font-medium tracking-tight text-white no-underline shadow-xs transition-colors duration-150 hover:bg-accent-hover"
            >
              View projects →
            </a>
            <div className="flex items-center gap-1.5">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line-strong text-ink-secondary transition-colors duration-150 hover:bg-secondary hover:text-ink"
              >
                <GitHubIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line-strong text-ink-secondary transition-colors duration-150 hover:bg-secondary hover:text-ink"
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: contact form */}
        <ContactForm />
      </div>
    </section>
  );
}
