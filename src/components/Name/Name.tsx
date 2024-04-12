import React from "react";

export default function Name({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-3xl text-primary leading-6 ${className}`}>
      {children}
    </h1>
  );
}
