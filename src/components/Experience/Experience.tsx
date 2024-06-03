import { ReactNode } from "react";
import clsx from "clsx";

interface ExperienceProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  company?: string;
  companyType?: string;
  timespan?: string;
  subText?: string;
  capitalize?: boolean;
  extraTitle?: ReactNode;
}

export default function Experience({
  children,
  className,
  title,
  company,
  timespan,
  subText,
  capitalize = false,
  extraTitle,
}: ExperienceProps) {
  return (
    <div className={`border-b last:border-none pb-4 ${className}`}>
      <div className={"flex justify-between"}>
        <h3
          className={clsx("", {
            capitalize: capitalize,
          })}
        >
          {title}
        </h3>
        {timespan && <p className={"text-right"}>{timespan}</p>}
      </div>
      {extraTitle && <>{extraTitle}</>}
      {company && (
        <p className={"font-medium"}>
          <span dangerouslySetInnerHTML={{ __html: company }} />
          {subText && `, ${subText}`}
        </p>
      )}
      <section>
        {children && <ul className={"flex flex-col gap-1 ml-3"}>{children}</ul>}
      </section>
    </div>
  );
}
