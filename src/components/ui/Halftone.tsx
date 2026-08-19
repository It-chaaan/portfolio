import type { ComponentProps } from "react";
export function Halftone({ className = "", ...props }: ComponentProps<"div">) {
  return <div aria-hidden="true" className={`halftone-dots ${className}`} {...props} />;
}
