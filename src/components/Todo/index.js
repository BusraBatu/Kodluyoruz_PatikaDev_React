import Footer from "./Footer";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
import React from "react";
//this component is showing us each component is self-contained and not dependent
// not used event handler pattern but hopefully next time
const Todo = () => {
  //own states
  const [todos, setTodos] = useState([]);// like a container
  const [hide, setHide] = useState("All");
  return (
    <div className="todoapp">{/*we are sending the properties for sub-child components */}
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} hide={hide} />
      <Footer todos={todos} setTodos={setTodos} setHide={setHide}/>
    </div>
  );
};

export default Todo;
