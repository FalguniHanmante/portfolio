import Section from "./Section";
import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="grid max-w-3xl gap-10 sm:grid-cols-2">
        <div>
          <h3 className="font-display text-lg font-bold">Education</h3>
          <p className="mt-3 font-semibold">{education.school}</p>
          <p className="text-pine-soft dark:text-oat/75">{education.place}</p>
          <p className="mt-2">{education.degree}</p>
          <p className="text-sm italic text-pine-soft dark:text-oat/75">
            {education.year}
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold">Certifications</h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-lilac-deep dark:marker:text-lilac">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
