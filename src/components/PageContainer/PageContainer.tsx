import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  isFirstPage?: boolean;
}

export default function PageContainer({
  children,
  isFirstPage = false,
}: PageContainerProps) {
  return (
    <section className={`page ${!isFirstPage ? "page-break" : ""}`}>
      {children}
    </section>
  );
}
