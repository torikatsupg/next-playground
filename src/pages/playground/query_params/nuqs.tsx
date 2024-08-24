import { Button } from "@/components/button";
import { Input } from "@/components/Input";
import { useQueryState } from "nuqs";

export default function NuqsPage() {
  const [firstName, setFirstName] = useQueryState("firstName");
  const [lastName, setLastName] = useQueryState("lastName");

  return (
    <div>
      <Input
        label={`firstName, value: ${firstName}, type: ${typeof firstName}`}
        value={firstName ?? ""}
        onChange={(e) => setFirstName(e.target.value)}
        error={undefined}
      />

      <Button onClick={() => setFirstName(null)}>{"set null -> empty"}</Button>

      <Button disabled={true}>{"set undefined (not allowed)"}</Button>

      <Button onClick={() => setFirstName("")}>{"set empty -> empty"}</Button>

      <Input
        label={`lastName, value: ${lastName}, type: ${typeof lastName}`}
        value={lastName ?? ""}
        onChange={(e) => setLastName(e.target.value)}
        error={undefined}
      />
    </div>
  );
}
