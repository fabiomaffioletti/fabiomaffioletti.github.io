export interface Profile {
  name: string;
  jobTitle: string;
  headline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  siteUrl: string;
  careerStartYear: number;
  currentCompany: string;
}

export const profile: Profile = {
  name: "Fabio Maffioletti",
  jobTitle: "Head of Engineering",
  headline:
    "Head of Engineering | Senior Engineering Manager | Technology Leader",
  location: "Milan, Italy",
  email: "fabio.maffioletti@gmail.com",
  linkedin: "https://www.linkedin.com/in/fabiomaffioletti/",
  github: "https://github.com/fabiomaffioletti",
  siteUrl: "https://www.fabiomaffioletti.me",
  careerStartYear: 2008,
  currentCompany: "Tidio",
};

export function yearsOfExperience(asOf: Date = new Date()): number {
  return asOf.getFullYear() - profile.careerStartYear;
}
