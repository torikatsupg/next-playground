import { Button } from "@/components/Button";
import { parseAsJson, useQueryState } from "nuqs";
import { useEffect } from "react";
import * as z from "zod";

const schema = z.object({
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
});
// NOTE: パースに失敗する場合, useQueryStateはnullとなる
// .transform((_) => {
//   throw new Error("This should never be called");
// });

export default function NuqsPage() {
  useEffect(() => {
    localStorage.setItem("debug", "nuqs");
  });
  const [json, setJson] = useQueryState("json", parseAsJson(schema.parse));

  return (
    <div>
      <p>{JSON.stringify(json)}</p>

      <Button onClick={() => setJson(null)}>{"set null"}</Button>

      <Button disabled={true}>{"set undefined (not allowed)"}</Button>

      <Button onClick={() => setJson({})}>{"set {}"}</Button>

      <Button
        onClick={() =>
          setJson({
            firstName: "John",
            lastName: "Doe",
          })
        }
      >
        {"set values"}
      </Button>

      <Button
        onClick={() =>
          setJson({
            firstName: null,
            lastName: null,
          })
        }
      >
        {"set nulls"}
      </Button>

      <Button
        onClick={() =>
          setJson({
            firstName: undefined,
            lastName: undefined,
          })
        }
      >
        {"set undefineds"}
      </Button>

      <Button
        onClick={() =>
          setJson({
            firstName: "first",
          })
        }
      >
        {"set only first name"}
      </Button>

      <Button
        onClick={() =>
          setJson({
            lastName: "last",
          })
        }
      >
        {"set only last name"}
      </Button>
    </div>
  );
}
