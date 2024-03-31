import { Inter } from "next/font/google";
import Image from "next/image";
import { use, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [state, setState] = useState(0);
	return (
		<main>
			<div>hoge</div>
		</main>
	);
}
