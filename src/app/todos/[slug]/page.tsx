import Example from "@/components/Example";
import { notFound } from "next/navigation";

function getTodo(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
    res.json()
  );
}

const TodoPage = async ({ params }: { params: { slug: string } }) => {
  const todo = await getTodo(params.slug);

  console.log("todo: ", todo);

  if (todo.title === undefined) return notFound();

  return (
    <>
      <h1>{todo.title}</h1>
      <Example />
    </>
  );
};

export default TodoPage;
