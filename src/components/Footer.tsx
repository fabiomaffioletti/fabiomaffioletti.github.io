import CurrentYear from "./CurrentYear";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line px-gutter py-8">
      <p className="m-0 text-[.95rem] text-muted">
        &copy; <CurrentYear buildYear={new Date().getFullYear()} /> {profile.name}
      </p>
    </footer>
  );
}
