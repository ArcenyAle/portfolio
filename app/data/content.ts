// =============================================================
// SITE CONTENT — edit everything here. No text should need to
// change inside component files once real content is ready.
// =============================================================

export const profile = {
  name: "Arceny Rivera",
  roles: ["Full-Stack Developer", "XR Engineer"],
  availability: "Available for full-time · 2026",
  bio: "Full-stack software engineer with hands-on experience building production web applications and leading immersive XR/VR projects using modern frameworks and scalable backend systems.",
  github: "https://github.com/ArcenyAle",
  linkedin: "https://www.linkedin.com/in/arcenyrivera/",
  linkedinLabel: "in/arcenyrivera",
  githubLabel: "ArcenyAle",
  email: "arcenyrivera2@gmail.com",
  school: "UC Irvine",
  // Set to a real URL (e.g. "/resume.pdf") once the résumé file exists.
  resumeUrl: null as string | null,
};

// A generic outbound reference — used for LinkedIn posts, secondary
// write-ups, etc. that support a project card without being the
// primary case-study/GitHub/video link.
export type ExternalLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  featured?: boolean;
  category: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  // Public path, e.g. "/xp.png" — leave undefined until the file
  // actually exists in /public. No image = no media block is
  // rendered (no placeholder box), per design decision.
  image?: string;
  caseStudyUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  demoStatus?: "archived" | "live";
};

export const projects: Project[] = [
  {
    id: "xperience",
    featured: true,
    category: "Full-Stack · Lead Developer",
    year: "2026",
    title: "Xperience",
    // TODO: still placeholder text — send a real description
    // (what it does, the problem it solves, your role/stack) and I'll
    // swap this in. Video link is wired up below already.
    description:
      "Placeholder — add the problem it solves, your architecture, and a measurable outcome.",
    tags: ["React", "Node.js", "PostgreSQL"],
    // Once /public/xp.png exists, set: image: "/xp.png"
    videoUrl:
      "https://drive.google.com/file/d/1fMd0j4Q1hD4_pp7ecQRrNpVYuZUWgrp6/view?usp=sharing",
    demoStatus: "archived",
  },
  // {
  //   id: "example-2",
  //   category: "Full-Stack",
  //   year: "2024",
  //   title: "Example 2",
  //   description:
  //     "Placeholder for a second web project. Add the description, stack, and the impact once you're happy with the layout.",
  //   tags: ["TypeScript", "Python", "FastAPI"],
  // },
  {
    id: "psyche-mission",
    category: "Capstone · NASA Psyche Mission",
    year: "2026",
    title: "A Trip Around the Asteroid Belt",
    description:
      "A Monopoly-style educational game built in Unity for NASA's Psyche mission. Developed core gameplay systems — turn management, state management, and rule logic — and led a structured user-testing initiative spanning black-box testing with non-technical users and white-box testing with technical users. Coordinated project logistics and communication directly with the NASA Psyche Mission sponsor across two academic terms with a 5-person team.",
    tags: ["Unity", "C#", "Game Design"],
  },
];

export type XRProject = {
  id: string;
  role: string;
  org: string;
  title: string;
  description: string;
  tags: string[];
  // Same convention as Project.image above.
  image?: string;
  links?: ExternalLink[];
};

export const xrProjects: XRProject[] = [
  {
    id: "hr-training-pilot",
    role: "Developer · SimInsights / HyperSkill",
    org: "SimInsights",
    title: "HR Immersive AI Training Pilot",
    description:
      "A scenario-based HR training simulation combining XR and AI, built on SimInsights' HyperSkill platform. Designed the training scenarios end-to-end — including an AI-driven character playing a represented staff member — to give trainees unlimited, self-paced practice in a low-stakes immersive environment. Built independently during the SimInsights internship and highlighted by leadership as a standout example of initiative.",
    tags: ["HyperSkill", "AI Training", "XR"],
    // Once /public/hr.png exists, set: image: "/hr.png"
    links: [
      {
        label: "LinkedIn shoutout post ↗",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7386615378329702400/",
      },
    ],
  },
  {
    id: "uci-dorm-vr",
    role: "Lead Developer · EMXR",
    org: "EMXR / UCI",
    title: "UCI Dorm VR Experience",
    description:
      "Led development of 4 interactive VR dorm environments in Unity, with full user-navigation systems for exploring each space. Delivered the experience live at UCI Celebrate, supporting 20–30 simultaneous VR headsets under continuous foot traffic. Built two deployment paths — a standalone Unity build for sideloading onto headsets, and a Hyperscale-hosted version for scalable live demos — leading architecture decisions across a 3-developer team.",
    tags: ["Unity", "C#", "Meta Quest"],
    // Once /public/emxr.png exists, set: image: "/emxr.png"
    links: [
      {
        label: "LinkedIn showcase post ↗",
        href: "https://www.linkedin.com/posts/tony-hwang_strategicinnovation-usecaselayer-immersivetechnology-activity-7452399446790803456-wAhX",
      },
      {
        label: "Anteater Family Weekend post ↗",
        href: "https://www.linkedin.com/posts/tony-hwang_anteaterfamilyweekend-edtech-xr-activity-7395226981782474752-UdDS",
      },
      {
        label: "Early HyperSkill showcase (pre-developer role) ↗",
        href: "https://www.linkedin.com/posts/tony-hwang_a-few-weeks-ago-i-hinted-that-i-was-working-activity-7320577408519065600-D0Oo",
      },
    ],
  },
  {
    id: "sccca-vr",
    role: "Lead Developer · SCCCA",
    org: "SCCCA",
    title: "South Chinese Cultural Center VR Experience",
    description:
      "Led development of a 10-minute immersive VR experience in Unity, centered on environment-driven storytelling. Implemented cinematic camera work with Cinemachine, plus custom animated systems — tree growth and environmental transformation, ripple-based interactions, and dynamic scene/skybox transitions — to build a narrative-driven experience around the user's perspective. Led system design and implementation across a 3-developer team. Visuals aren't publicly shareable due to project ownership.",
    tags: ["Unity", "C#", "Cinemachine"],
  },
  {
    id: "vr-library",
    role: "Developer · UCI VR Lab",
    org: "UCI VR Lab",
    title: "VR Library",
    description:
      "An interactive VR library — clicking a bookshelf launches an in-headset 360° video tied to that shelf's subject. The build is complete; UCI VR Lab plans to refine and publicly release it. No screenshots yet since it's unpublished.",
    tags: ["Unity", "C#", "360 Video"],
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML/CSS"],
  },
  {
    title: "Backend",
    items: ["Python", "Java", "Node.js", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    title: "XR / VR",
    items: ["Unity", "C#", "Meta Quest SDK", "Blender", "Cinemachine"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Figma", "Linux"],
  },
];

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  bullets: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    period: "January 2026 — July 2026",
    title: "Frontend Developer",
    org: "Dawdle Labs",
    bullets: [
      "Built the full frontend of EaselReel using Next.js and Tailwind CSS — a production-ready company website showcasing products, partners, and achievements.",
      "Integrated backend APIs to enable authentication, licensing flows, and navigation into XR platform features.",
      "Implemented dynamic UI behavior, including content segmentation to display institution-specific data within the platform.",
      "Worked within a ~20-engineer org, collaborating closely with a 5-person team in an agile workflow with tickets, deadlines, and weekly syncs.",
    ],
  },
  {
    period: "January 2026 — June 2026",
    title: "Lead Developer / Systems Engineer",
    org: "NASA Psyche Capstone",
    bullets: [
      "Developed core gameplay systems — turn management, state management, and rule logic — for a Monopoly-style educational game in Unity.",
      "Led a structured user-testing initiative combining black-box testing (non-technical users) and white-box testing (technical users), recruiting testers and incorporating feedback iteratively.",
      "Owned project coordination, communication, and logistics, working directly with the NASA Psyche Mission sponsor across a 5-person team over two academic terms.",
    ],
  },
  {
    period: "January 2026 — June 2026",
    title: "Lead Developer",
    org: "SCCCA",
    bullets: [
      "Led development of a 10-minute immersive VR experience for the South Chinese Cultural Center, built in Unity.",
      "Implemented cinematic camera systems with Cinemachine and environment-driven storytelling, including animated tree growth, ripple interactions, and dynamic skybox transitions.",
      "Led system design and implementation across a 3-developer team.",
    ],
  },
  {
    period: "2025 — 2026 (Academic Year)",
    title: "VR Developer (Lead)",
    org: "EMXR Internship",
    bullets: [
      "Led development of 4 interactive VR dorm environments in Unity, including full user-navigation systems.",
      "Delivered the experience at UCI Celebrate, supporting 20–30 simultaneous VR headsets under continuous foot traffic.",
      "Built both a standalone sideloadable Unity build and a Hyperscale-hosted deployment for scalable live demos.",
      "Led architecture decisions across a 3-developer team.",
    ],
  },
  {
    period: "2025 — 2026 (Academic Year)",
    title: "VR Developer / Lead Developer",
    org: "UCI VR Lab",
    bullets: [
      "Led development of multiple VR experiences in Unity, including 360° immersive environments.",
      "Organized and ran 2–4 VR showcases and demos across departments for both technical and non-technical audiences.",
      "Mentored students in VR tools and workflows across hackathon-style development cycles.",
      "Led technical direction and delivery within a 4–5 person team.",
    ],
  },
  {
    period: "Summer 2025",
    title: "Backend Developer",
    org: "SimInsights",
    bullets: [
      "Migrated the SimGenie backend from synchronous Flask to asynchronous FastAPI, enabling concurrent request handling under multi-user load.",
      "Implemented partial WebSocket functionality for real-time interactions, eliminating blocking behavior across simultaneous prompts.",
      "Independently designed and built a scenario-based HR/AI training simulation on the HyperSkill platform, recognized by leadership as a standout example of initiative and communication alongside technical delivery.",
      "Worked within a ~10-engineer team in a production environment.",
    ],
  },
];
