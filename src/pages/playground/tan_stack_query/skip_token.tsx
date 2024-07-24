import { skipToken, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Row } from "../../../components/table";

const key = "skip_token_key";
const longProcess = async (): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return "done";
};

export default function SkipTokenPage() {
  const [shouldFetch, setShouldFetch] = useState(false);

  const result = useQuery({
    queryKey: [key],
    queryFn: shouldFetch ? longProcess : skipToken,
  });

  const items = [
    { label: "shouldFetch", value: `${shouldFetch}` },
    { label: "isFetching", value: `${result.isFetching}` },
    { label: "isPending", value: `${result.isPending}` },
    { label: "data", value: `${result.data}` },
  ];

  return (
    <div className="flex flex-col gap-8">
      <h1>skip token</h1>

      <button onClick={() => setShouldFetch(true)}>fetch</button>

      <table>
        <tbody>
          {items.map((item) => (
            <Row key={item.label} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
