import { ReactNode } from "react";
import { classNames } from "../lib/utils.ts";

interface RatingButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  selected: boolean;
}

export const RatingButton = ({
  onClick,
  children,
  className,
  selected,
}: RatingButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex flex-1 items-center bg-white px-3 py-2 text-sm font-normal text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-10",
        className,
        !selected || "bg-gray-400",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
