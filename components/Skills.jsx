import Section from "./Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="max-w-3xl space-y-7">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="font-display text-lg font-bold">{s.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-oat px-3.5 py-1.5 text-sm font-medium text-pine dark:bg-pine-line dark:text-oat"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
