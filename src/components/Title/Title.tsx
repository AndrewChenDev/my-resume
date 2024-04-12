import React from "react";

export default function Title({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`text-sm text-light-text ${className}`}>{children}</span>
  );
}
