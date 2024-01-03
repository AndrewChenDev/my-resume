import { ReactNode } from "react";
import clsx from "clsx";

interface ExperienceProps {
  children?: ReactNode;
  title?: string;
  company?: string;
  companyType?: string;
  timespan?: string;
  subText?: string;
  capitalize?: boolean;
}

export default function Experience({
  children,
  title,
  company,
  companyType,
  timespan,
  subText,
  capitalize = false,
}: ExperienceProps) {
  return (
    <>
      <div>
        <h3
          className={clsx("text-sm font-bold", {
            capitalize: capitalize,
          })}
        >
          {title}
        </h3>
        <p className={"text-xs "}>{company}</p>
        <section className={"pl-1.5"}>
          <div className={"flex justify-between"}>
            <span className={"text-xs text-[#7C7C7C]"}>{timespan}</span>
            <span className={"text-xs text-[#7C7C7C]"}>{subText}</span>
          </div>
          <p className={"text-xs text-[#7C7C7C]"}>{companyType}</p>
          {children && (
            <div className={"mt-0.5"}>
              <h4 className={"text-xs text-light-text"}>Achievements/Tasks</h4>
              <ul className={"flex flex-col gap-1"}>{children}</ul>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
