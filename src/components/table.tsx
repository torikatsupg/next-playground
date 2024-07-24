import { ReactNode } from "react"

export const Row = ({ label, value }: { label: ReactNode, value: ReactNode }) => {
    return (
        <tr>
            <th>{label}</th>
            <td>{value}</td>
        </tr>
    )
}