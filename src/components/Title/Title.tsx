import React from "react";

export default function Title({ children }: { children?: React.ReactNode }) {
  return <span className={"text-sm text-light-text"}>{children}</span>;
}
