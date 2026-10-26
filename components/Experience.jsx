import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {experience.map((job) => (
          <article key={`${job.company}-${job.period}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-bold">
                {job.role}
                <span className="font-normal text-pine-soft dark:text-oat/75">
                  {" "}
                  | {job.company}, {job.location}
                </span>
              </h3>
              <p className="shrink-0 text-sm italic text-pine-soft dark:text-oat/75">
                {job.period}
              </p>
            </div>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed marker:text-lilac-deep dark:marker:text-lilac">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
