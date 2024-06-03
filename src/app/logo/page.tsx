import { Educations, Experiences, Highlight, Volunteer } from "@/sections";
import { highlightData } from "@/data/highlight/highlightData";
import { experiencesData } from "@/data/experiences/experiencesData";
import { volunteerData } from "@/data/volunteer/volunteerData";
import { educationData } from "@/data/education/educationData";
import React from "react";

/**
 * Resume for Logo.com
 *
 */
export default function Logo() {
  return (
    <div className={"flex flex-row gap-[3.5rem] mt-4"}>
      <div className=" w-full flex flex-col gap-4">
        <Highlight highlightData={highlightData["logo.com"]} />
        <Experiences experiencesData={experiencesData["logo.com"]} />
        <Volunteer volunteerData={volunteerData.main} />
        <Educations educationData={educationData.main} />
      </div>
    </div>
  );
}
