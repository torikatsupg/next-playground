import { FormProvider, useController, useForm } from "react-hook-form";
import { InputSchema, OutputSchema } from "./type";
import { defaultValues } from "./const";
import { ComponentProps, useEffect } from "react";
import { FormFieldTitle } from "./formFields/FormFieldTitle";
import { FormFieldWeight } from "./formFields/FormFieldWeight";

export const OnlyRHFPage = () => {
  const methods = useForm<InputSchema, unknown, OutputSchema>({
    defaultValues,
  });

  useEffect(() => {
    methods.setFocus("title");
  }, []);

  const onSubmit = async (data: OutputSchema) => {
    // NOTE: submit data to server
    console.log({
      key: "onSubmitSuccess",
      data,
    });
  };

  return (
    <div>
      <h1>Adync Validation | Only RHF</h1>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormFieldTitle />
          <FormFieldWeight />

          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
};
