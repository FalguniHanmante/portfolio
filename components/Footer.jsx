import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-oat dark:border-pine-line">
      <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-pine-soft dark:text-oat/75">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js and
        Tailwind CSS.
      </div>
    </footer>
  );
}
