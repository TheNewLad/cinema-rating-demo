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
        "relative inline-flex flex-1 items-center bg-white px-3 py-2 text-sm font-normal text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-400 focus:z-10 dark:bg-slate-700 dark:text-white dark:ring-slate-500 dark:hover:bg-slate-600",
        className,
        !selected ||
          "bg-slate-500 text-white hover:text-slate-950 dark:bg-slate-800 dark:hover:text-white",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
