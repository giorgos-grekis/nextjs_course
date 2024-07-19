import { Suspense } from "react";

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Loading pages is Like <Suspence> component
{
  /* <Suspense fallback={<Loading />}>
  <Page />
</Suspense>; */
}

async function getTodos() {
  await wait(3000);
  // throw new Error("new error");
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
}

export default async function Home() {
  return (
    <>
      <h1>Todos</h1>
      <Suspense fallback={"Loading..."}>
        <TodoList />
      </Suspense>
    </>
  );
}

// In order to Suspense works, await data need to be inside Suspense

async function TodoList() {
  const todos = await getTodos();

  return <p>{todos.length}</p>;
}
