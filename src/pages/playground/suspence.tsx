'use client'
import { useSuspenseQuery } from "@tanstack/react-query";
import { Row } from "../_components/table";
import { Suspense } from "react";

const key = "suspence_key";
const longProcess = async (): Promise<string> => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return "done";
}

export default function () {
    // TODO(torikatsu): return imidiatly and show loading
    return (
        <div className="flex flex-col gap-8">
            <h1>suspence</h1>
            <Suspense fallback={<Fallback />}>
                <Contents />
            </Suspense>
        </div>
    )
};

const Fallback = () => {
    console.log('fallback')
    return <div>loading...</div>
}

const Contents = () => {
    console.log('Contents')
    const result = useSuspenseQuery({
        queryKey: [key],
        queryFn: longProcess,
    });

    const items = [
        { label: "isFetching", value: `${result.isFetching}` },
        { label: "isPending", value: `${result.isPending}` },
        { label: "data", value: `${result.data}` },
    ]

    return (
        <div>
            {result.data}

            <table>
                <tbody>
                    {items.map((item) => (
                        <Row key={item.label} {...item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

