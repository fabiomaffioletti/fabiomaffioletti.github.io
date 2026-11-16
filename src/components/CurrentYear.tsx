"use client";

import { useEffect, useState } from "react";

interface CurrentYearProps {
  buildYear: number;
}

/* The site is exported as static HTML, so a year computed at build time would freeze on the
   last deploy. The HTML carries the build year (so the server and browser render the same
   thing), then the browser swaps in the visitor's current year. */
export default function CurrentYear({ buildYear }: CurrentYearProps) {
  const [year, setYear] = useState(buildYear);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the year must be read again in the browser
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
