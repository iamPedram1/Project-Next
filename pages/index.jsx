import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getTodos, deleteTodo } from "../services/httpService";
import Link from "next/link";
import TodoList from "../components/todoList";

export default function Home({ todos }) {
  return (
    <>
      <input />
      <TodoList todos={todos} />
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
