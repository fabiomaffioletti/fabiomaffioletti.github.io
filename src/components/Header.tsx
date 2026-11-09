import { profile } from "@/data/profile";

export default function Header() {
  return (
    <header className="mt-12 text-center">
      <h1 className="text-4xl font-bold sm:text-[2.5rem]">{profile.name}</h1>
      <p className="mt-4 flex flex-col items-center gap-1 text-sm leading-relaxed sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 sm:text-base">
        <span>{profile.location}</span>
        <span aria-hidden="true" className="hidden sm:inline">
          •
        </span>
        <a className="break-all sm:break-normal" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <span aria-hidden="true" className="hidden sm:inline">
          •
        </span>
        <a
          className="break-all sm:break-normal"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          {profile.linkedin}
        </a>
      </p>
    </header>
  );
}
