import {
  BasicInfo,
  Contacts,
  Educations,
  Experiences,
  Highlight,
  Volunteer,
} from "@/sections";
import React from "react";
import { educationData } from "@/data/education/educationData";
import { volunteerData } from "@/data/volunteer/volunteerData";
import { experiencesData } from "@/data/experiences/experiencesData";
import { highlightData } from "@/data/highlight/highlightData";
import PaginatedResume from "@/components/PaginatedResume/PaginatedResume";

function Header() {
  return (
    <>
      <BasicInfo className="" />
      <Contacts />
      <hr />
    </>
  );
}

export default function Home() {
  return (
    <PaginatedResume header={<Header />}>
      <div className="flex flex-row gap-[3.5rem] mt-4">
        <div className="w-full flex flex-col gap-4">
          <Highlight highlightData={highlightData.main} />
        </div>
      </div>
      <Experiences experiencesData={experiencesData.main} />
      <Volunteer volunteerData={volunteerData.main} />
      <Educations educationData={educationData.main} />
    </PaginatedResume>
  );
}
