import {
  BasicInfo,
  Contacts,
  Educations,
  Experiences,
  Professionals,
  Skills,
} from "@/sections";

export default function Home() {
  return (
    <>
      <BasicInfo className={"mb-4"} />
      <hr />
      <Contacts />
      <hr />

      <div className={"flex flex-row gap-[3.5rem] mt-4"}>
        <div className="left w-1/2 flex flex-col gap-2.5">
          <Experiences />
          <Educations />
        </div>

        <div className="right w-1/2 flex flex-col gap-2.5">
          <Skills />
          <Professionals />
        </div>
      </div>
    </>
  );
}
