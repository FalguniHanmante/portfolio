import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const title = `${profile.name} | ${profile.role}`;
const description =
  "Web application developer with 4+ years of experience in Next.js, React.js, Tailwind CSS, Python, and FastAPI. View projects, experience, and contact details.";

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: [
    "Falguni Hanmante",
    "Web Application Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "MongoDB",
    "Pune",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description,
    url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F0E4" },
    { media: "(prefers-color-scheme: dark)", color: "#1F3B2E" },
  ],
};

// Sets the theme before first paint so the page doesn't flash
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${body.variable} ${display.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}