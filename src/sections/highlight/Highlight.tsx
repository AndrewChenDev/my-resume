import { Task } from "@/components";

export default function Highlight({
  highlightData,
  className = "",
}: {
  highlightData: string[];
  className?: string;
}) {
  return (
    <section className={`highlight-section ${className}`}>
      <h2 className={"uppercase text-primary"}>highlight of qualification</h2>
      <div className={"flex gap-2 flex-col"}>
        <ul className={"flex flex-col gap-1 ml-3"}>
          {highlightData.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </ul>
      </div>
    </section>
  );
}
