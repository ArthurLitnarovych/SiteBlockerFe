import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type UILinkVariant = "primary" | "secondary" | "outlined";
export type UILinkProps = {} & Parameters<typeof Link>[0];
export function UILink({ className, ...props }: UILinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "p-1 text-teal-500 hover:text-teal-600 cursor-pointer",
      )}
    />
  );
}
