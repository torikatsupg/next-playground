import { Inter } from "next/font/google";
import Link from "next/link";
import { use, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [state, setState] = useState(0);
  return (
    <main>
      <h1>Links</h1>
      <ul>
        <li>
          <Link href="/playground/async_validation">{"async validation"}</Link>
        </li>
      </ul>
    </main>
  );
}
