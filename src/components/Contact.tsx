import CopyButton from "./CopyButton";
import { profile } from "@/data/profile";

interface ContactProps {
  title: string;
  text: string;
}

export default function Contact({ title, text }: ContactProps) {
  return (
    <section className="contact" id="contact">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="reach">
        <div className="email">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <CopyButton text={profile.email} />
        </div>
        <a
          className="btn ghost"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          Message me on LinkedIn
        </a>
      </div>
    </section>
  );
}
