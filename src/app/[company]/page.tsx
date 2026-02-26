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
import React from "react";
import { routes } from "@/data/path";
import PaginatedResume from "@/components/PaginatedResume/PaginatedResume";

export const dynamicParams = false;

export function generateStaticParams() {
  return routes;
}

function Header() {
  return (
    <>
      <BasicInfo className="" />
      <Contacts />
      <hr />
    </>
  );
}

export default async function Logo(props: {
  params: Promise<{ company: string }>;
}) {
  const params = await props.params;
  return (
    <PaginatedResume header={<Header />}>
      <div className="flex flex-row gap-[3.5rem] mt-4">
        <div className="w-full flex flex-col gap-4">
          <Highlight
            highlightData={highlightData[params?.company] ?? highlightData.main}
          />
        </div>
      </div>
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
    </PaginatedResume>
  );
}
