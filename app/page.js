"use client";

export default function Home() {
  return (
    <button
      onClick={() => {
        new Worker(new URL("./worker", import.meta.url));
      }}
    >
      Launch web worker
    </button>
  );
}
