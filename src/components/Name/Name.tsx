import React from "react";

export default function Name({ children }: { children?: React.ReactNode }) {
  return <h1 className={"text-3xl text-primary leading-6"}>{children}</h1>;
}
