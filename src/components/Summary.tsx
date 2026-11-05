import Section from "./Section";
import { yearsOfExperience } from "@/data/profile";

export default function Summary() {
  const yearsSinceStart = yearsOfExperience();

  return (
    <div className="row mt-5">
      <Section title="Summary" />

      <div className="col-12 text-justify">
        <p>
          Technology leader with {yearsSinceStart}+ years of experience driving
          engineering excellence, building high-performing teams, and delivering
          scalable software solutions. Executive Coach, customer and
          business-driven, people-centric manager of multicultural AI-powered and
          AI-native teams. Track record of leveraging AI strategy and governance
          to drive organizational transformation (+125% throughput, $500K+
          annualized cost avoidance, Shadow AI elimination) and aligning tech with
          business outcomes (SOC 2, market expansion) while sustaining high-trust
          cultures (eNPS 9.29/10).
        </p>
      </div>
    </div>
  );
}
