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
  specified: z.string(),
  unspecified: z.string(),
});

export default function Page() {
  const [formDisabled, setFormDisabled] = useState(false);
  const [fieldDisabled, setFieldDisabled] = useState(false);

  const methods = useForm<z.infer<typeof FORM_SCHEMA>>({
    resolver: zodResolver(FORM_SCHEMA),
    disabled: formDisabled,
    defaultValues: {
      specified: "",
      unspecified: "",
    },
  });

  const formState = useFormState({ control: methods.control });

  const specifiedField = useController({
    control: methods.control,
    name: "specified",
  });
  const unspecifiedField = useController({
    control: methods.control,
    name: "unspecified",
  });

  const specifiedFieldProps = methods.register("specified", {
    disabled: fieldDisabled
  });

  const unspecifiedFieldProps = methods.register("unspecified");

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
        <Input {...specifiedFieldProps} label={"specified"} error={undefined} />

        <Input
          {...unspecifiedFieldProps}
          label={"unspecified"}
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
              specified: {
                useController: specifiedField.field.disabled ?? null,
                register: specifiedFieldProps.disabled ?? null,
              },
              unspecified: {
                useController: unspecifiedField.field.disabled ?? null,
                register: unspecifiedFieldProps.disabled ?? null,
              },
            },
          },
          null,
          2
        )}
      </p>
    </div>
  );
}
