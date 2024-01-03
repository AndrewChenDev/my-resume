export default function Tag({ name }: { name: string }) {
  return (
    <span className={"bg-primary text-white text-xs px-1.5 py-1 rounded"}>
      {name}
    </span>
  );
}
