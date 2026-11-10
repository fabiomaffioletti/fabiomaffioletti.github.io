import { profile } from "@/data/profile";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-rule py-8 text-sm text-muted">
      <nav aria-label="Footer">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted hover:text-accent-hover"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent-hover"
            >
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href="/projects/android/missplitty/privacy-policy/"
              className="text-muted hover:text-accent-hover"
            >
              Privacy
            </a>
          </li>
        </ul>
      </nav>
      <p className="mt-6 max-w-prose text-2xs">
        I hereby authorize the treatment of my personal data according to Italian
        legislative decree no. 196 dated 2003-06-30
      </p>
    </footer>
  );
}
