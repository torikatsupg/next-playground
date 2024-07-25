import { useFormContext } from "react-hook-form";
import { InputSchema, OutputSchema } from "./type";

export const useOnlyRHFFormContext = () => {
  return useFormContext<InputSchema, unknown, OutputSchema>();
};
