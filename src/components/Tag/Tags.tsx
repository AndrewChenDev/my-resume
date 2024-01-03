import { Tag } from "@/components/Tag/index";

export function Tags({ tags }: { tags: Array<string> }) {
  return (
    <div className="skills-pool flex gap-1 flex-wrap mt-2">
      {tags.map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </div>
  );
}
