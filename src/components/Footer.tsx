import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer>
      <p className="foot-legal">
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
