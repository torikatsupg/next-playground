import { ComponentProps, forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentProps<"input"> & {
    label: string;
    error: string | undefined;
  }
>(({ id, label, error, ...otherProps }, ref) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...otherProps} />
      {error && <p className={"text-sm text-red-600"}>{error}</p>}
    </div>
  );
});
