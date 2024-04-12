import { Experience, Task } from "@/components";

export default function Professionals({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section className={`professional-section ${className}`}>
      <h2 className={"uppercase text-primary font-bold"}>
        professional project
      </h2>
      <div className={"flex gap-2 flex-col"}>
        {/*Lahoo.ca*/}
        <Experience title={"Lahoo.ca"}>
          <Task>
            <p>
              <span className={"font-bold"}>
                Headless WordPress Integration:
              </span>{" "}
              Transitioned the website to a headless WordPress architecture,
              enhancing flexibility and enabling a decoupled approach for the
              frontend.
            </p>
          </Task>

          <Task>
            <p>
              <span className={"font-bold"}>Frontend Development:</span>{" "}
              Implemented Next.js to create a dynamic, responsive user
              interface, significantly improving load speed from 7 seconds to
              300 milliseconds.
            </p>
          </Task>
          <Task>
            <p>
              <span className={"font-bold"}>Design Collaboration:</span> Worked
              closely with a UX/UI designer to re-envision and rebuild the
              entire site, resulting in a more intuitive and visually appealing
              user experience.
            </p>
          </Task>
          <Task>
            <p>
              <span className={"font-bold"}>AWS Configuration:</span> Optimized
              AWS setup to ensure high availability and resilience against DDoS
              attacks, maintaining site performance and reliability.
            </p>
          </Task>
          <Task>
            <p>
              <span className={"font-bold"}>Cost Optimization:</span> Reduced
              monthly hosting and operational costs by 3x through efficient
              resource utilization and service scaling.
            </p>
          </Task>
        </Experience>
        {/*Apass.ca*/}
        {/*<Experience company={"Apass.ca"}>*/}
        {/*  <Task>*/}
        {/*    <p>*/}
        {/*      <span className={"font-bold"}>E-Commerce Implementation:</span>{" "}*/}
        {/*      Integrated a seamless e-commerce platform, allowing for the online*/}
        {/*      purchase of courses. Implemented a secure checkout process,*/}
        {/*      enabling payment via credit card through IOTPay.*/}
        {/*    </p>*/}
        {/*  </Task>*/}
        {/*  <Task>*/}
        {/*    <span className={"font-bold"}>Backend Development:</span> Developed*/}
        {/*    functionalities for administrative control to facilitate course*/}
        {/*    management. Implemented a user interface for instructors to interact*/}
        {/*    with student data and course materials efficiently.*/}
        {/*  </Task>*/}
        {/*  <Task>*/}
        {/*    <span className={"font-bold"}>User Experience Enhancement:</span>{" "}*/}
        {/*    Designed and tested user flow to ensure a smooth transaction process*/}
        {/*    from course selection to payment.*/}
        {/*  </Task>*/}
        {/*  <Task>*/}
        {/*    <span className={"font-bold"}>System Optimization:</span>{" "}*/}
        {/*    Streamlined backend processes to support the addition of new courses*/}
        {/*    and manage student enrollments with ease.*/}
        {/*  </Task>*/}
        {/*</Experience>*/}
        {/*Sarahzhang.ca*/}
        <Experience title={"Sarahzhang.ca"}>
          <Task>
            <span className={"font-bold"}>
              Website Production & UI/UX Design:
            </span>{" "}
            Spearheaded the full-cycle website production, ensuring a cohesive
            and user-centric design. Crafted an engaging user interface and
            experience, tailored to facilitate intuitive navigation and
            interaction.
          </Task>
          <Task>
            {" "}
            <span className={"font-bold"}>
              Backend Development & Automation:
            </span>{" "}
            Designed and deployed a web crawler for REW.ca to automate property
            listing imports, enhancing backend efficiency for user management
            and listing portability.
          </Task>
          <Task>
            {" "}
            <span className={"font-bold"}>Process Optimization:</span> Developed
            a simplified backend interface, allowing for quick and effortless
            updates to property listings.
          </Task>
        </Experience>
      </div>
    </section>
  );
}
