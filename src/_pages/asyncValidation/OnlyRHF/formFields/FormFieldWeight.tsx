import { Input } from "@/components/Input";
import { useOnlyRHFFormContext } from "../utils";
import { useController, useFormState } from "react-hook-form";

export const FormFieldWeight = () => {
  const { register, control } = useOnlyRHFFormContext();
  const {
    fieldState: { error, isValidating },
  } = useController({ control, name: "weight" });

  return (
    <div>
      {isValidating && <p className="text-sm text-green-500">validating...</p>}
      <Input
        {...register("weight", {
          validate: (value) => {
            if (value.length === 0) {
              return "required";
            }
          },
        })}
        id="weight"
        label="weight"
        error={error?.message}
      />
    </div>
  );
};
