import React from "react";
import { getInvidoualTodo } from "../../services/httpService";
import { useRouter } from "next/router";

function Todo({ todo }) {
  const { back } = useRouter();
  return (
    <>
      <button className="btn-sm btn-primary" onClick={() => back()}>
        Go Back
      </button>
      {<div>User ID: {todo.userId}</div>}
      {<div>Todo ID: {todo.id}</div>}
      {<div>Todo Title: {todo.title}</div>}
      {<div>Todo isCompleted? {todo.completed ? "Yes" : "No"}</div>}
    </>
  );
}

export default Todo;

export const getServerSideProps = async ({ params }) => {
  const todo = await getInvidoualTodo(params.id);
  return {
    props: {
      todo,
    },
  };
};
