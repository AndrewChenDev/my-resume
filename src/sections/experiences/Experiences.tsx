import { Experience, Task } from "@/components";

export default function Experiences({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section className={`experience-section ${className}`}>
      <h2 className={"uppercase text-primary font-bold"}>work experience</h2>
      <div className={"flex gap-2 flex-col"}>
        {/*<Experience*/}
        {/*  title={"Consultant & Technical Advisory"}*/}
        {/*  company={"Lahoo Information Ltd"}*/}
        {/*  companyType={"News/ Media company"}*/}
        {/*  timespan={"01/2024 - Present"}*/}
        {/*  subText={"Burnaby, BC"}*/}
        {/*>*/}
        {/*  <Task*/}
        {/*    task={*/}
        {/*      "Comprehensive IT and web support services, including hardware troubleshooting and part replacements."*/}
        {/*    }*/}
        {/*  ></Task>*/}
        {/*  <Task*/}
        {/*    task={"Ensured consistent system uptime with website maintenance."}*/}
        {/*  ></Task>*/}
        {/*  <Task task={"Managed AWS and other server infrastructures."}></Task>*/}
        {/*  <Task*/}
        {/*    task={*/}
        {/*      "Provided rapid on-call emergency responses for website outages."*/}
        {/*    }*/}
        {/*  ></Task>*/}
        {/*</Experience>*/}
        <Experience
          title={"Full Stack Developer"}
          company={"Lahoo Information Ltd"}
          companyType={"News/ Media company"}
          timespan={"01/2022 - 12/2023"}
          subText={"Burnaby, BC"}
        >
          <Task
            task={
              "Spearheaded the development and maintenance of dynamic, user-centric WordPress websites using PHP, ensuring optimal user experiences."
            }
          />

          <Task
            task={
              "Led front-end development using Next.js with WordPress for responsive and interactive website designs."
            }
          />

          <Task
            task={
              "Developed internal software tools to bolster operational efficiency and user satisfaction."
            }
          />

          <Task
            task={
              "Managed AWS configurations and setups, supporting robust web infrastructures with an emphasis on security and performance."
            }
          />

          <Task
            task={
              "Collected and analyzed business-critical data, providing actionable insights for the sales department."
            }
          />

          <Task
            task={
              "Orchestrated communications with external companies in the web domain, driving strategic alignments and best practice sharing."
            }
          />

          <Task
            task={
              "Provided comprehensive IT support, from hardware troubleshooting to computer part replacements, ensuring consistent system uptime."
            }
          />
        </Experience>
        <Experience
          title={"Front End Developer"}
          company={"Lahoo Information Ltd"}
          companyType={"News/ Media company"}
          timespan={"10/2020 - 01/2022"}
          subText={"Burnaby, BC"}
        ></Experience>
        <Experience
          title={"Software Developer"}
          company={"Boltz Technology"}
          companyType={"Power-Bank Sharing company"}
          timespan={"10/2019 - 02/2020"}
          subText={"Richmond, BC"}
        >
          <Task
            task={
              "Led front-end development for WeChat mini programs and built cross-platform mobile apps with Flutter, focusing on user experience, consistency, and performance optimization. Collaborated with UX/UI teams for design implementation and conducted regular performance enhancements."
            }
          />
        </Experience>
      </div>
    </section>
  );
}
