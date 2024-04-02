import { useRef } from "react";

const key = "skip_token_key";
const longProcess = async (): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return "done";
};

export default function HiddenScrollPage () {
    const ref = useRef<HTMLDivElement>(null);

  function scroll() {
    ref.current?.scrollTo(0, 100);
  }

  function resetScroll() {
    ref.current?.scrollTo(0, 0);
  }

  return (
    <div className="flex flex-col gap-4">
      <div
      ref={ref}
        id="scrollableElement"
        className="w-[200px] h-[100px] overflow-hidden border"
      >
        これはスクロール可能なコンテンツです。これはスクロール可能なコンテンツです。これはスクロール可能なコンテンツです。
        これはスクロール可能なコンテンツです。これはスクロール可能なコンテンツです。これはスクロール可能なコンテンツです。
        これはスクロール可能なコンテンツです。これはスクロール可能なコンテンツです。これはスクロール可能なコンテンツです。
        これはスクロール可能なコンテンツです。これはスクロール可能なコンテンツです。これはスクロール可能なコンテンツです。
        これはスクロール可能なコンテンツです。これはスクロール可能なコンテンツです。これはスクロール可能なコンテンツです。
      </div>
      <button onClick={scroll}>スクロール</button>

      <button onClick={resetScroll}>リセット</button>
    </div>
  );
}
