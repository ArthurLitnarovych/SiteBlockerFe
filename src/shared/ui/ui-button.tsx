import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type UIButtonVariant = "primary" | "secondary" | "outlined";
export type UIButtonProps = {
  variant: UIButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export function UIButton({ className, variant, ...props }: UIButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-4 h-10 rounded cursor-pointer flex gap-2 items-center justify-center",
        {
          primary:
            "text-white bg-teal-500 hover:bg-teal-600 shadow disabled:opacity-50 shadow-teal-500/30",
          secondary:
            "text-white bg-rose-500 hover:bg-rose-600 shadow disabled:opacity-50 shadow-rose-500/30",
          outlined:
            "border border-slate-300 hover:border-slate-500 shadow disabled:opacity-50",
        }[variant],
      )}
    />
  );
}
