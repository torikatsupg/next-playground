import { Input } from "@/components/Input";
import { useOnlyRHFFormContext } from "../utils";
import { useController, useFormState } from "react-hook-form";

export const FormFieldTitle = () => {
  const { register, control } = useOnlyRHFFormContext();
  const {
    fieldState: { error, isValidating },
  } = useController({ control, name: "title" });

  return (
    <div>
      {isValidating && <p className="text-sm text-green-500">validating...</p>}
      <Input
        {...register("title", {
          validate: async (value) => {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            if (value.length === 0) {
              return "required";
            }
            if (value.length > 10) {
              return "too long";
            }

            if (value === "test") {
              return "'test' is not allowed";
            }
          },
        })}
        id="title"
        label="title"
        error={error?.message}
      />
    </div>
  );
};
