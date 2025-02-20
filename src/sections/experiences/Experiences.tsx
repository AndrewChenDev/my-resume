import { Experience, Task } from "@/components";

export default function Experiences({
  experiencesData,
  className = "",
}: {
  experiencesData: any;
  className?: string;
}) {
  return (
    <section className={`experience-section ${className}`}>
      <h2 className={"uppercase text-primary"}>work experience</h2>
      <div className={"flex gap-2 flex-col"}>
        {experiencesData.map((experience: any, index: number) => {
          const extraTitle = experience?.extraTitle ? (
            <Experience
              className={"p-0!"}
              title={experience.extraTitle.title}
              timespan={experience.extraTitle.timespan}
            />
          ) : null;
          return (
            <Experience
              key={index}
              title={experience.title}
              company={experience.company}
              companyType={experience.companyType}
              timespan={experience.timespan}
              subText={experience.subText}
              extraTitle={extraTitle}
            >
              {experience?.tasks?.map((task: string, index: number) => {
                return <Task key={index} task={task} />;
              })}
            </Experience>
          );
        })}
      </div>
    </section>
  );
}
