import { Experience, Task } from "@/components";

export default function Experiences() {
  return (
    <section className={"experience-section"}>
      <h2 className={"uppercase text-primary font-bold"}>work experience</h2>
      <div className={"flex gap-2 flex-col"}>
        <Experience
          title={"Consultant & Technical Advisory"}
          company={"Lahoo Information Ltd"}
          companyType={"News/ Media company"}
          timespan={"01/2024 - Present"}
          subText={"Burnaby, BC"}
        ></Experience>
        <Experience
          title={"Full Stack Developer"}
          timespan={"01/2022 - 12/2023"}
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
          timespan={"10/2020 - 01/2022"}
        ></Experience>
        <hr className={"text-light-text/70 px-1"} />
        <Experience
          title={"Software Developer"}
          company={"Boltz Technology"}
          companyType={"Power-Bank Sharing company"}
          timespan={"10/2019 - 02/2020"}
          subText={"Richmond, BC"}
        >
          <Task
            task={
              "Managed front-end development for WeChat mini programs, ensuring an intuitive user experience tailored to the platform's unique ecosystem."
            }
          />

          <Task
            task={
              "Created cross-platform mobile applications for iOS and Android using Flutter, emphasizing consistency and performance across all devices."
            }
          />

          <Task
            task={
              "Collaborated with UX/UI designers to transform designs into functional applications, continuously refining the user experience."
            }
          />

          <Task
            task={
              "Regularly profiled and optimized application performance, striving for swift interactions, reduced load times, and efficient resource utilization."
            }
          />
        </Experience>
      </div>
    </section>
  );
}
