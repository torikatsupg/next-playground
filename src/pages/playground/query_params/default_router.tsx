import { Button } from "@/components/button";
import { Input } from "@/components/Input";
import { useRouter } from "next/router";

export default function DefaultRouterPage() {
  const router = useRouter();

  const name = router.query["name"] as string | undefined;

  const onChange = (input: string | undefined | null) => {
    router.push({ query: { name: input } });
  };

  return (
    <div>
      <Input
        label={`value: ${name}, type: ${typeof name}`}
        value={name ?? ""}
        onChange={(e) => onChange(e.target.value)}
        error={undefined}
      />

      <Button onClick={() => onChange(null)}>{"set null -> empty"}</Button>

      <Button onClick={() => onChange(undefined)}>
        {"set undefined -> empty"}
      </Button>

      <Button onClick={() => onChange("")}>{"set empty -> empty"}</Button>

      <Button onClick={() => router.push({ query: {} })}>
        {"delete -> undefined"}
      </Button>
    </div>
  );
}
