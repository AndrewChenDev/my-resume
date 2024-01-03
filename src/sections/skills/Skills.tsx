import { Tags } from "@/components";

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className={"uppercase text-primary font-bold"}>skills</h2>
      <Tags
        tags={[
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Scss",
          "React",
          "Next.js",
          "jQuery",
          "PHP",
          "Node.js",
          "Express",
          "Java",
          "Dart",
          "Flutter",
          "MySQL",
          "MongoDB",
          "WordPress",
          "Docker",
          "AWS (EC2, ECS, S3, CloudFront, Route53, RDS, CloudWatch)",
          "Windows",
          "Linux",
          "MacOS",
        ]}
      />

      <p className={"text-xs leading-7"}>
        *Additional skills and proficiencies available upon request.
      </p>
    </section>
  );
}
