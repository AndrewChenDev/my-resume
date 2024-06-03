import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import React from "react";
import {
  BasicInfo,
  Contacts,
  Educations,
  Experiences,
  Highlight,
  Volunteer,
} from "@/sections";
import { highlightData } from "@/data/highlight/highlightData";
import { experiencesData } from "@/data/experiences/experiencesData";
import { volunteerData } from "@/data/volunteer/volunteerData";
import { educationData } from "@/data/education/educationData";

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
        <section className={"page"}>
          <BasicInfo className={""} />
          <Contacts />
          <hr />
          {children}
        </section>
      </body>
    </html>
  );
}
