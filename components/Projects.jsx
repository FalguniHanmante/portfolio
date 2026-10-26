import Image from "next/image";
import Section from "./Section";
import { projects, isSet } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="max-w-3xl space-y-8">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-3xl bg-oat/70 p-5 sm:p-7 dark:bg-pine-line/40"
          >
            {p.image && (
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-pine/10 bg-oat dark:border-oat/10 dark:bg-pine-line">
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.name} website`}
                  fill
                  sizes="(min-width: 768px) 700px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="rounded-full bg-lilac/50 px-3 py-1 text-xs font-semibold dark:bg-lilac/20 dark:text-lilac">
                My role: {p.type}
              </p>
            </div>

            <p className="mt-3 leading-relaxed text-pine-soft dark:text-oat/80">
              {p.description}
            </p>

            <ul className="mt-4 list-disc space-y-1.5 pl-5 marker:text-lilac-deep dark:marker:text-lilac">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <ul
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Technologies used"
            >
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-paper px-3 py-1 text-xs font-medium dark:bg-pine"
                >
                  {s}
                </li>
              ))}
            </ul>

            {isSet(p.url) && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-semibold text-lilac-deep underline decoration-lilac decoration-2 underline-offset-4 hover:decoration-lilac-deep dark:text-lilac dark:hover:decoration-oat"
              >
                Visit {p.url.replace(/^https?:\/\//, "")}
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
