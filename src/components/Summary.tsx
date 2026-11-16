import { Fragment } from "react";

import YearsOfExperience from "./YearsOfExperience";
import { Section } from "./ui";
import { yearsOfExperience } from "@/data/profile";

interface SummaryProps {
  paragraphs: string[];
}

/* Renders a paragraph, swapping each {years} for the years of experience kept current in the browser. */
function withYears(text: string) {
  return text.split("{years}").map((part, index) => (
    <Fragment key={index}>
      {index > 0 && <YearsOfExperience buildValue={yearsOfExperience()} />}
      {part}
    </Fragment>
  ));
}

export default function Summary({ paragraphs }: SummaryProps) {
  return (
    <Section id="summary" title="Summary" ruled className="pt-0">
      <div className="pt-10">
        {paragraphs.map((text, index) => (
          <p key={index} className="mb-5 text-[1.1rem] leading-[1.7] text-muted last:mb-0">
            {withYears(text)}
          </p>
        ))}
      </div>
    </Section>
  );
}
