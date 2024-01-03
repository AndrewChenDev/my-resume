import React from "react";

export default function SummaryStatement({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <span className={"block text-xs"}>{children}</span>;
}
