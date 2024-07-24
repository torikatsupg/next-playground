import { useForm } from "react-hook-form";
import { InputSchema, OutputSchema } from "./type";

export const OnlyRHFPage = () => {
  const { register, handleSubmit } = useForm<
    InputSchema,
    unknown,
    OutputSchema
  >({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (data: OutputSchema) => {
    console.log({
      key: "onSubmitSuccess",
      data,
    });
  };

  return (
    <div>
      <h1>Adync Validation | Only RHF</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>{"title"}</label>
        <input type="text" placeholder="text" {...register("title")} />

        <label>{"description"}</label>
        <input type="text" placeholder="text" {...register("description")} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
