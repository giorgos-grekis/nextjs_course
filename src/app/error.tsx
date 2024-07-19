"use client";

// error page MUST be a client component

export default function Error({ error, reset }: any) {
  return (
    <>
      <button onClick={reset}>Retry</button>
      <h1>{error.message}</h1>
    </>
  );
}
