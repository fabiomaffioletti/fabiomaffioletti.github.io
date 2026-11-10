import { profile } from "@/data/profile";

export default function HomeHero() {
  return (
    <header className="mt-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-3 text-lg text-muted">{profile.tagline}</p>
    </header>
  );
}
