"use client";

import { useState } from "react";
import { profile } from "../data/content";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorHref, setErrorHref] = useState<string | null>(null);
  const [replyEmail, setReplyEmail] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: (formData.get("name") ?? "").toString().trim(),
      company: (formData.get("company") ?? "").toString().trim(),
      email: (formData.get("email") ?? "").toString().trim(),
      message: (formData.get("message") ?? "").toString().trim(),
    };

    if (!data.name || !data.company || !data.email || !data.message) {
      setStatus("error");
      setErrorHref(null);
      return;
    }

    setStatus("sending");
    setErrorHref(null);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          _subject: `Portfolio message from ${data.name} (${data.company})`,
          company: data.company,
          message: data.message,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setReplyEmail(data.email);
      setStatus("success");
      form.reset();
    } catch {
      const body = `Name: ${data.name}%0D%0ACompany: ${data.company}%0D%0AEmail: ${data.email}%0D%0A%0D%0A${encodeURIComponent(
        data.message
      )}`;
      const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio message from ${data.name}`
      )}&body=${body}`;
      setErrorHref(mailto);
      setStatus("error");
    }
  }

  const inputClasses =
    "h-10 rounded-md border border-line bg-primary px-3 text-sm text-ink placeholder:text-ink-tertiary transition-shadow duration-150";

  return (
    <div className="animate-fade-up rounded-lg border border-line bg-elevated p-7 shadow-md [animation-delay:80ms]">
      <div className="mb-5 flex flex-col gap-1">
        <span className="font-mono text-xs tracking-wide text-ink-tertiary uppercase">
          Get in touch
        </span>
        <h2 className="text-xl font-semibold tracking-tight text-ink">
          Send me a message
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <div className="grid grid-cols-2 gap-3.5">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink-secondary">Name</span>
            <input name="name" type="text" placeholder="Jane Doe" className={inputClasses} />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink-secondary">
              Company / Startup
            </span>
            <input name="company" type="text" placeholder="Acme Inc." className={inputClasses} />
          </label>
        </div>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink-secondary">Return email</span>
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            className={inputClasses}
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink-secondary">Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell me about the role or project…"
            className={`${inputClasses} h-auto resize-none py-2.5`}
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-1 inline-flex h-11 items-center justify-center rounded-md bg-accent text-sm font-medium text-white shadow-xs transition-colors duration-150 hover:bg-accent-hover disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message →"}
        </button>

        <p className="min-h-[1.25rem] text-sm" role="status">
          {status === "success" && (
            <span className="text-accent-ink">
              ✓ Thanks — your message is on its way. I&rsquo;ll reply to {replyEmail}.
            </span>
          )}
          {status === "error" && !errorHref && (
            <span className="text-ink-secondary">
              Please complete all fields before sending.
            </span>
          )}
          {status === "error" && errorHref && (
            <span className="text-ink-secondary">
              Couldn&rsquo;t send automatically.{" "}
              <a href={errorHref} className="font-medium text-accent-ink">
                Open your email app instead →
              </a>
            </span>
          )}
        </p>
      </form>
    </div>
  );
}
