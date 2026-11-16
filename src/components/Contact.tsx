import CopyButton from "./CopyButton";
import { buttonStyles } from "./ui";
import { profile } from "@/data/profile";

interface ContactProps {
  title: string;
  text: string;
}

export default function Contact({ title, text }: ContactProps) {
  return (
    <section
      id="contact"
      className="mx-gutter mb-[clamp(4rem,8vw,6rem)] grid items-center gap-x-16 gap-y-8 rounded-[20px] border border-line bg-panel p-[clamp(2.5rem,6vw,4.5rem)] desktop:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
    >
      <div>
        <h2 className="m-0 text-[clamp(2rem,4vw,3.4rem)] leading-[1.04]">{title}</h2>
        <p className="mt-4 text-muted">{text}</p>
      </div>
      <div className="flex w-full max-w-96 flex-col gap-3.5 justify-self-start desktop:justify-self-end">
        <div className="flex items-center gap-2 rounded-[10px] border border-line bg-canvas py-2 pr-2 pl-4">
          <a
            href={`mailto:${profile.email}`}
            className="min-w-0 flex-1 text-[1.05rem] wrap-anywhere text-fg no-underline"
          >
            {profile.email}
          </a>
          <CopyButton text={profile.email} />
        </div>
        <a
          className={buttonStyles.ghost}
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
