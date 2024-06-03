import { Tags } from "@/components";

export default function Skills({ className = "" }: { className?: string }) {
  return (
    <section className={`skills-section ${className}`}>
      <h2 className={"uppercase text-primary"}>skills</h2>
      <section className={"front-end"}>
        <h3 className={"inline mr-2"}>Front End:</h3>
        HTML, CSS, SCSS, JavaScript, TypeScript, React, Next.js, jQuery,
        Tailwind CSS
      </section>
      <section className={"back-end"}>
        <h3 className={"inline mr-2"}>Back-End:</h3>
        Node.js, Express.js, PHP, Java,
      </section>
      <section className={"database"}>
        <h3 className={"inline mr-2"}>Database Management:</h3>
        MySQL, MongoDB, Firebase
      </section>
      <section className={"version-control"}>
        <h3 className={"inline mr-2"}>Version Control:</h3>
        Git, GitHub
      </section>
      <section className={"mobile"}>
        <h3 className={"inline mr-2"}>Mobile:</h3>
        Flutter, Dart, Kotlin(Android), Swift(iOS)
      </section>
      <section className={"api"}>
        <h3 className={"inline mr-2"}>API Development:</h3>
        RESTful APIs, GraphQL, Apollo, Axios, Fetch API, Postman
      </section>
      <section className={"deployment"}>
        <h3 className={"inline mr-2"}>Deployment:</h3>
        Docker, Kubernetes, AWS, Vercel
      </section>
      <section className={"operating-system"}>
        <h3 className={"inline mr-2"}>Operating System:</h3>
        Windows, MacOS, Linux
      </section>
      <p className={"text-xs leading-7"}>
        *Additional skills and proficiencies available upon request.
      </p>
    </section>
  );
}
