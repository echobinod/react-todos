import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import AddTodo from "./Components/AddTodo";

function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((item) => {
        return item !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    let id;
    if (todos.length === 0) {
      id = 0;
    } else {
      id = todos[todos.length - 1].id + 1;
    }
    const myTodo = {
      id: id,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />

      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />

      <Footer />
    </>
  );
}

export default App;
