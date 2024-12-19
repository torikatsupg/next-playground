import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  FormProvider,
  useController,
  useForm,
  useFormContext,
  useFormState,
} from "react-hook-form";
import * as z from "zod";

const FORM_SCHEMA = z.object({
  test: z.string(),
});

export default function Page() {
  const [formDisabled, setFormDisabled] = useState(false);
  const [fieldDisabled, setFieldDisabled] = useState(false);

  const methods = useForm({
    resolver: zodResolver(FORM_SCHEMA),
    disabled: formDisabled,
    defaultValues: {
      test: "test",
    },
  });

  const formState = useFormState({ control: methods.control });
  const testField = useController({ control: methods.control, name: "test" });
  const testFieldRegistrationProps = methods.register("test", {
    disabled: formDisabled,
  });

  return (
    <div>
      <div>
        <Button onClick={() => setFormDisabled(!formDisabled)}>
          {"Toggle form disabled"}
        </Button>

        <Button onClick={() => setFieldDisabled(!fieldDisabled)}>
          {"Toggle field disabled"}
        </Button>
      </div>

      <hr />

      <form>
        <Input
          {...testFieldRegistrationProps}
          label={"test"}
          error={undefined}
        />
      </form>

      <hr />

      <p
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {JSON.stringify(
          {
            inputValues: {
              formDisabled,
              fieldDisabled,
            },
            result: {
              form: formState.disabled,
              "field(useController)": testField.field.disabled ?? false,
              "field(register)": testFieldRegistrationProps.disabled ?? false,
            },
          },
          null,
          2
        )}
      </p>
    </div>
  );
}
