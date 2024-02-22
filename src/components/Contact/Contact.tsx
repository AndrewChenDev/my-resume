import { IconType } from "react-icons";
import Link from "next/link";

interface ContactPros {
  info?: string;
  Icon?: IconType;
  hyperlink?: boolean;
  alternativeDisplay?: string;
}

export default function Contact({
  info,
  Icon,
  hyperlink = false,
  alternativeDisplay,
}: ContactPros) {
  return (
    <div className={"flex items-center space-x-1"}>
      {Icon && <Icon className={"text-primary"} />}

      {hyperlink ? (
        <Link href={`${info}`}>
          <span className={"text-xs"}>{alternativeDisplay ?? info}</span>
        </Link>
      ) : (
        <span className={"text-xs"}>{alternativeDisplay ?? info}</span>
      )}
    </div>
  );
}
