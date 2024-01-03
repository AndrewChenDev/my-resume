import React from "react";

export default function Task({
  task,
  children,
}: {
  task?: string;
  children?: React.ReactNode;
}) {
  return (
    <li className={"task"}>
      {task}
      {children}
    </li>
  );
}
