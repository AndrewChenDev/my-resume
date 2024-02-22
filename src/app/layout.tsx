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
        <section className={"page"}>{children}</section>
        {/*<section className={"page"}>P2</section>*/}
        {/*<section className={"page"}>P3</section>*/}
      </body>
    </html>
  );
}
