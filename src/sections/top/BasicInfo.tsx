import { Contact, Name } from "@/components";

export default function BasicInfo({ className = "" }: { className?: string }) {
  return (
    <section className={`top-section ${className}`}>
      <Name className={"mb-2"}>Andrew Chen</Name>
      <Contact
        className={"w-full text-center"}
        info={"Coquitlam, BC V3B 0G2"}
      />
    </section>
  );
}
