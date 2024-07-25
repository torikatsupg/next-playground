import * as z from "zod";
import { InputSchema } from "./type";

export const formSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const defaultValues: InputSchema = {
  title: "",
  weight: "",
};
