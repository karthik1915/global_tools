import React from "react";

type Props = { orientation: "vertical" | "horizontal" };

const Seperator = ({ orientation }: Props) => {
  return (
    <div
      className={`bg-border shrink-0 bg-gray-300
        ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"}
      `}
    ></div>
  );
};

export default Seperator;
