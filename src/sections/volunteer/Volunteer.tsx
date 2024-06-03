import { Experience, Task } from "@/components";

export default function Volunteer({
  volunteerData,
  className = "",
}: {
  volunteerData: any;
  className?: string;
}) {
  return (
    <section className={`experience-section ${className}`}>
      <h2 className={"uppercase text-primary"}>volunteer experience</h2>
      <div className={"flex gap-2 flex-col"}></div>
      {volunteerData.map((volunteer: any, index: number) => {
        return (
          <Experience
            key={index}
            title={volunteer.title}
            company={volunteer.company}
            companyType={volunteer.companyType}
            timespan={volunteer.timespan}
            subText={volunteer.subText}
          >
            {volunteer.tasks.map((task: string, index: number) => {
              return <Task key={index}>{task}</Task>;
            })}
          </Experience>
        );
      })}
    </section>
  );
}
