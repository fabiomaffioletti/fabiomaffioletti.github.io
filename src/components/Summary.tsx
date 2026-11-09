import Section from "./Section";
import { yearsOfExperience } from "@/data/profile";

export default function Summary() {
  const yearsSinceStart = yearsOfExperience();

  return (
    <section className="mt-12">
      <Section title="Summary" />

      <p className="mt-4 text-left leading-relaxed md:text-justify">
        Technology leader with {yearsSinceStart}+ years of experience driving
        engineering excellence, building high-performing teams, and delivering
        scalable software solutions. Executive Coach, customer and business-driven,
        people-centric manager of multicultural AI-powered and AI-native teams.
        Track record of leveraging AI strategy and governance to drive
        organizational transformation (+125% throughput, $500K+ annualized cost
        avoidance, Shadow AI elimination) and aligning tech with business outcomes
        (SOC 2, market expansion) while sustaining high-trust cultures (eNPS
        9.29/10).
      </p>
    </section>
  );
}
