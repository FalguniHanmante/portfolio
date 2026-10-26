import { Github, Linkedin, MapPin, Phone } from "lucide-react";
import Section from "./Section";
import { profile, isSet } from "@/data/portfolio";

const linkClass =
  "inline-flex items-center gap-2 transition-colors hover:text-lilac-deep dark:hover:text-lilac";

export default function Contact() {
  return (
    <Section id="contact" title="Let's talk">
      <p className="max-w-xl text-base leading-relaxed sm:text-lg">
        {profile.contactNote}
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-5 inline-block break-all font-display text-2xl font-bold underline decoration-lilac decoration-4 underline-offset-4 hover:text-lilac-deep dark:hover:text-lilac sm:text-3xl"
      >
        {profile.email}
      </a>

      <ul className="mt-8 space-y-3 text-sm">
        {profile.phone && (
          <li>
            <a href={`tel:${profile.phone}`} className={linkClass}>
              <Phone size={16} aria-hidden="true" />
              {profile.phone}
            </a>
          </li>
        )}
        <li className="inline-flex items-center gap-2">
          <MapPin size={16} aria-hidden="true" />
          {profile.location}
        </li>
        {isSet(profile.linkedin) && (
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
          </li>
        )}
        {isSet(profile.github) && (
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
          </li>
        )}
      </ul>
    </Section>
  );
}
