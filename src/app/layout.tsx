import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrew's Resume",
  description: "Andrew's Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="resume-content">{children}</div>
      </body>
    </html>
  );
}
