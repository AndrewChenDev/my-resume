import React from "react";

export default function SummaryStatement({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <span className={`block text-xs ${className}`}>{children}</span>;
}
