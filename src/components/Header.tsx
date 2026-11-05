import { profile } from "@/data/profile";

export default function Header() {
  return (
    <div className="row text-center mt-5">
      <div className="col-12">
        <h1>{profile.name}</h1>
        <p>
          {profile.location} •{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a> •{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedin}
          </a>
        </p>
      </div>
    </div>
  );
}
