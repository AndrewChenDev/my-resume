import { Experience } from "@/components";

export default function Educations({ educationData }: any) {
  return (
    <section className={"education-section"}>
      <h2 className={"uppercase text-primary font-bold"}>education</h2>
      <div className={"flex gap-2 flex-col"}>
        {educationData.map((data: any, index: number) => {
          return (
            <Experience
              key={index}
              title={data?.title}
              company={data?.company}
              timespan={data?.timespan}
              subText={data?.subText}
            />
          );
        })}
      </div>
    </section>
  );
}
