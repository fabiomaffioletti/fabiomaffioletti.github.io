"use client";

import { useEffect, useState } from "react";

import { yearsOfExperience } from "@/data/profile";

interface YearsOfExperienceProps {
  buildValue: number;
}

/* Like CurrentYear: the static HTML carries the count at build time, then the browser
   recomputes it so it grows every year without a rebuild. */
export default function YearsOfExperience({ buildValue }: YearsOfExperienceProps) {
  const [years, setYears] = useState(buildValue);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the count must be read again in the browser
    setYears(yearsOfExperience());
  }, []);

  return <>{years}</>;
}
