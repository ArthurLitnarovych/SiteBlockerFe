import clsx from "clsx";
import { PropsWithRef, SelectHTMLAttributes, useId } from "react";

export type UISelectOptions = {
  value: string;
  label: string;
};
export type UISelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UISelectOptions[];
};
export function UISelectField({
  className,
  error,
  label,
  selectProps,
  options,
}: UISelectFieldProps) {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <select
        id={id}
        {...selectProps}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
        )}
      >
        {options?.map((option, i) => (
          <option key={i} value={option?.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
