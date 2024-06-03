import {
  BasicInfo,
  Contacts,
  Educations,
  Experiences,
  Professionals,
  Skills,
  Highlight,
  Volunteer,
} from "@/sections";
import React from "react";
import { educationData } from "@/data/education/educationData";
import { volunteerData } from "@/data/volunteer/volunteerData";
import { experiencesData } from "@/data/experiences/experiencesData";
import { highlightData } from "@/data/highlight/highlightData";

export default function Home() {
  return (
    <>
      {/*Page 1*/}
      <div className={"flex flex-row gap-[3.5rem] mt-4"}>
        <div className=" w-full flex flex-col gap-4">
          <Highlight highlightData={highlightData.main} />
          <Experiences experiencesData={experiencesData.main} />
          <Volunteer volunteerData={volunteerData.main} />
          <Educations educationData={educationData.main} />
        </div>
      </div>
    </>
  );
}
