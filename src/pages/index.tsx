import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <h1>Links</h1>
      <ul>
        <li>
          Async Validation
          <ul>
            <li>
              <Link href="/playground/async_validation/only_rhf">
                {"only_rhf"}
              </Link>
            </li>
          </ul>
        </li>

        <li>
          Query Params
          <ul>
            <li>
              <Link href="/playground/query_params/nuqs">{"nuqs"}</Link>
            </li>

            <li>
              <Link href="/playground/query_params/default_router">
                {"default_router"}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
