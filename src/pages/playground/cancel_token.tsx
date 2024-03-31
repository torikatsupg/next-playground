import { skipToken, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Row } from "../_components/table";
import { rejects } from "assert";

const key = "cancel_token_key";
const longProcess = async (signal: AbortSignal): Promise<string> => {

    await new Promise((resolve, rejects) => {
        const id = setTimeout(resolve, 5000)

        signal.addEventListener("abort", () => {
            clearTimeout(id);
            rejects(new Error("aborted: clearTimeout"));
        });

        if (signal.aborted) {
            clearTimeout(id);
            rejects(new Error("aborted: clearTimeout"));
        }
    });

    return "done";
}

export default function () {
    const queryClient = useQueryClient();


    const [enabled, setEnabled] = useState(false);
    const result = useQuery({
        queryKey: [key],
        queryFn: ({ signal }) => longProcess(signal),
        enabled,
    });

    const items = [
        { label: "isFetching", value: `${result.isFetching}` },
        { label: "isPending", value: `${result.isPending}` },
        { label: "isPaused", value: `${result.isPaused}` },
        { label: "isError", value: `${result.isError}` },
        { label: "data", value: `${result.data}` },
    ]

    return (
        <div className="flex flex-col gap-8">
            <h1>cancel token</h1>

            <button
                className="block"
                onClick={() => {
                    setEnabled(true);
                }}>start fetch</button>

            <button
                className="block"
                onClick={() => {
                    queryClient.invalidateQueries({ queryKey: [key] });

                }}>refetch</button>

            <button
                className="block"
                onClick={() => {
                    queryClient.cancelQueries({ queryKey: [key] });
                }}>cancel fetch</button>

            <table className="text-left">
                <tbody>
                    {items.map((item) => (
                        <Row key={item.label} {...item} />
                    ))
                    }
                </tbody>
            </table>


        </div>
    )
};
