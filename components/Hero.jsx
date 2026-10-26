import { Download, Github, Linkedin } from "lucide-react";
import { profile, isSet } from "@/data/portfolio";

const iconLink =
  "rounded-full p-2 text-pine-soft transition-colors hover:text-lilac-deep dark:text-oat/75 dark:hover:text-lilac";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 pt-14 sm:pt-20">
      {profile.availability && (
        <p className="inline-flex items-center gap-2 rounded-full bg-lilac/40 px-3.5 py-1.5 text-sm font-medium dark:bg-lilac/20 dark:text-lilac">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-lilac-deep dark:bg-lilac"
          />
          {profile.availability}
        </p>
      )}

      <p className="mt-8 font-display text-xl text-pine-soft dark:text-oat/75 sm:text-2xl">
        {profile.greeting}
      </p>
      <h1 className="mt-1 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-4 font-display text-2xl font-semibold text-lilac-deep dark:text-lilac sm:text-3xl">
        {profile.role}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pine-soft dark:text-oat/80">
        {profile.tagline}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center rounded-full bg-pine px-6 py-3 text-sm font-semibold text-oat transition-colors hover:bg-[#2c5340] dark:bg-lilac dark:text-pine dark:hover:bg-[#dccbf1]"
        >
          View my work
        </a>
        <a
          href={profile.resume}
          download
          className="inline-flex items-center gap-2 rounded-full border-2 border-pine/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-pine dark:border-oat/30 dark:hover:border-oat"
        >
          <Download size={16} aria-hidden="true" />
          Download resume
        </a>

        <div className="ml-1 flex items-center gap-1">
          {isSet(profile.github) && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={iconLink}
            >
              <Github size={20} />
            </a>
          )}
          {isSet(profile.linkedin) && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={iconLink}
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
