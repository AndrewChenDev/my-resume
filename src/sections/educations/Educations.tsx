import { Experience } from "@/components";

export default function Educations() {
  return (
    <section className={"education-section"}>
      <h2 className={"uppercase text-primary font-bold"}>education</h2>
      <div className={"flex gap-2 flex-col"}>
        <Experience
          title={"Diploma – Computer Systems Technology"}
          company={"British Columbia Institute of Technology"}
          timespan={"01/2018 - 03/2019"}
          subText={"GPA: 78"}
        />
        <Experience
          title={"Certificate – Computer Systems"}
          company={"British Columbia Institute of Technology"}
          timespan={"01/2017 - 04/2018"}
          subText={"GPA: 80"}
        />
      </div>
    </section>
  );
}
