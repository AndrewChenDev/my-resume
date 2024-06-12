import { routes } from "@/data/path";
import Link from "next/link";

export default function Path() {
  return (
    <>
      <ul className={"flex gap-5 flex-wrap"}>
        <li className={"list-disc"}>
          <Link className={"text-2xl text-blue-600"} href={"/"}>
            main
          </Link>
        </li>
        {routes.map((route) => (
          <li className={"list-disc"} key={route.company}>
            <Link
              className={"text-2xl text-blue-600"}
              href={`/${route.company}`}
            >
              {route.company}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
