import { profile } from "@/data/profile";

export default function HomeHero() {
  return (
    <header className="mt-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-3 text-lg text-muted">{profile.jobTitle}</p>
      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
        <span>{profile.location}</span>
        <span aria-hidden="true" className="text-rule">
          ·
        </span>
        <a href={`mailto:${profile.email}`} className="break-words">
          {profile.email}
        </a>
        <span aria-hidden="true" className="text-rule">
          ·
        </span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </header>
  );
}
