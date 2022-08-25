import React, { useState } from "react";
import { getTodos, deleteTodo } from "../services/httpService";
import TodoList from "../components/todoList";
import { Input } from "antd";
import { toast } from "react-toastify";

export default function Home({ todos }) {
  const [todolist, setTodolist] = useState(todos);
  const [newTodo, setNewTodo] = useState("");

  const handleDelete = (id) => {
    const clone = [...todolist];
    setTodolist(clone.filter((item) => item.id !== id));
    setTimeout(() => {
      try {
        deleteTodo(id);
        toast.success("Deleted");
      } catch (ex) {
        setTodolist(clone);
      }
    }, 500);
  };

  const handleAdd = () => {
    if (newTodo) {
      setTodolist([
        { title: newTodo, id: todolist.length + 1, completed: false },
        ...todolist,
      ]);

      setNewTodo("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <Input
            value={newTodo}
            onChange={({ target }) => setNewTodo(target.value)}
            placeholder="Create a new Todo"
            style={{ margin: "1rem 0" }}
          />
          <button
            type="button"
            onClick={handleAdd}
            style={{ height: "100%" }}
            className="btn btn-sm btn-primary btn-outlined mx-5"
          >
            Add
          </button>
        </div>
        <TodoList todos={todolist} onDelete={handleDelete} />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const todos = await getTodos();
  return {
    props: {
      todos,
    },
  };
};
