import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";

export const Button = ({
  className,
  ...otherProps
}: ComponentProps<"button">) => {
  return (
    <div>
      <button {...otherProps} />
    </div>
  );
};
