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
      <div className={"py-2.5 px-5"}>
        <BasicInfo />
      </div>

      <hr />
      <Contacts />
      <hr />

      <div className={"flex flex-row"}>
        <div className="left py-2.5 px-5 w-1/2 flex flex-col gap-2.5">
          <Experiences />
        </div>

        <div className="right py-2.5 px-5 w-1/2 flex flex-col gap-2.5">
          <Skills />
          <Professionals />
          <Educations />
        </div>
      </div>
    </>
  );
}
