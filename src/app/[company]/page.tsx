import { Educations, Experiences, Highlight, Volunteer } from "@/sections";
import { highlightData } from "@/data/highlight/highlightData";
import { experiencesData } from "@/data/experiences/experiencesData";
import { volunteerData } from "@/data/volunteer/volunteerData";
import { educationData } from "@/data/education/educationData";
import React from "react";
import { routes } from "@/data/path";
export const dynamicParams = true;
export function generateStaticParams() {
  return routes;
}

export default function Logo({ params }: { params: { company: string } }) {
  return (
    <div className={"flex flex-row gap-[3.5rem] mt-4"}>
      <div className=" w-full flex flex-col gap-4">
        <Highlight
          highlightData={highlightData[params?.company] ?? highlightData.main}
        />
        <Experiences
          experiencesData={
            experiencesData[params?.company] ?? experiencesData.main
          }
        />
        <Volunteer
          volunteerData={volunteerData[params?.company] ?? volunteerData.main}
        />
        <Educations
          educationData={educationData[params?.company] ?? educationData.main}
        />
      </div>
    </div>
  );
}
