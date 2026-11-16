"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [label, setLabel] = useState("Copy");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setLabel("Copied");
    } catch {
      setLabel("Select and copy");
    }
    setTimeout(() => setLabel("Copy"), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="cursor-pointer rounded-lg bg-accent px-4 py-[.45rem] text-[.9rem] text-on-accent"
    >
      {label}
    </button>
  );
}
