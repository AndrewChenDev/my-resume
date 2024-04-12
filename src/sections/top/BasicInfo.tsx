import { Name, SummaryStatement, Title } from "@/components";

export default function BasicInfo({ className = "" }: { className?: string }) {
  return (
    <section className={`top-section ${className}`}>
      <Name className={"mb-2"}>Che An (Andrew) Chen</Name>
      <Title>Full Stack Developer</Title>
      <SummaryStatement>
        An experienced web and software developer with ability work under
        minimal supervision.
      </SummaryStatement>
    </section>
  );
}
