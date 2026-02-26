"use client";

import React, {
  Children,
  useEffect,
  useRef,
  useState,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import PageContainer from "../PageContainer/PageContainer";

// 11 inches at 96 DPI
const PAGE_HEIGHT = 11 * 96;
// 0.5in top + 0.5in bottom padding
const PAGE_PADDING = 0.5 * 96 * 2;
const USABLE_HEIGHT = PAGE_HEIGHT - PAGE_PADDING;

interface PaginatedResumeProps {
  header: ReactNode;
  children: ReactNode;
}

interface PageContent {
  sections: number[];
}

export default function PaginatedResume({
  header,
  children,
}: PaginatedResumeProps) {
  const measureRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState<PageContent[]>([]);
  const [isReady, setIsReady] = useState(false);

  const childArray = Children.toArray(children);

  useEffect(() => {
    if (!measureRef.current || !headerRef.current) return;

    const headerHeight = headerRef.current.offsetHeight;
    const sectionElements = measureRef.current.children;
    const sectionHeights: number[] = [];

    for (let i = 0; i < sectionElements.length; i++) {
      sectionHeights.push((sectionElements[i] as HTMLElement).offsetHeight);
    }

    // Distribute sections across pages
    // All pages have header, so available height is the same for all
    const availableHeight = USABLE_HEIGHT - headerHeight;
    const newPages: PageContent[] = [];
    let currentPage: PageContent = { sections: [] };
    let currentPageHeight = 0;

    sectionHeights.forEach((height, index) => {
      // Check if section fits on current page
      if (
        currentPage.sections.length > 0 &&
        currentPageHeight + height > availableHeight
      ) {
        // Start new page
        newPages.push(currentPage);
        currentPage = { sections: [index] };
        currentPageHeight = height;
      } else {
        currentPage.sections.push(index);
        currentPageHeight += height;
      }
    });

    // Add last page if it has content
    if (currentPage.sections.length > 0) {
      newPages.push(currentPage);
    }

    setPages(newPages);
    setIsReady(true);
  }, [childArray.length]);

  // Render measurement container (hidden) to measure sections
  const measurementContainer = (
    <div
      ref={measureRef}
      style={{
        position: "absolute",
        visibility: "hidden",
        width: "7.5in", // 8.5in - 1in padding
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      {childArray.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );

  const headerMeasurement = (
    <div
      ref={headerRef}
      style={{
        position: "absolute",
        visibility: "hidden",
        width: "7.5in",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      {header}
    </div>
  );

  // Before measurement is complete, show content in single page to avoid flash
  if (!isReady) {
    return (
      <>
        {measurementContainer}
        {headerMeasurement}
        <PageContainer isFirstPage>
          {header}
          {children}
        </PageContainer>
      </>
    );
  }

  // Render paginated content
  return (
    <>
      {measurementContainer}
      {headerMeasurement}
      {pages.map((page, pageIndex) => (
        <PageContainer key={pageIndex} isFirstPage={pageIndex === 0}>
          {header}
          {page.sections.map((sectionIndex) => {
            const child = childArray[sectionIndex];
            if (isValidElement(child)) {
              return cloneElement(child, { key: sectionIndex });
            }
            return <div key={sectionIndex}>{child}</div>;
          })}
        </PageContainer>
      ))}
    </>
  );
}
