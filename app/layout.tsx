import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arceny Rivera — Full-Stack Developer & XR Engineer",
  description:
    "Full-stack software engineer with hands-on experience building production web applications and leading immersive XR/VR projects.",
};

// Inline, blocking script: reads the saved theme before React hydrates
// so the page never flashes light-mode before switching to dark.
const THEME_INIT_SCRIPT = `
  (function () {
    try {
      var saved = localStorage.getItem('arceny-theme');
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-primary text-ink">
        {children}
      </body>
    </html>
  );
}
