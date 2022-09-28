import { useState } from "react";

function Footer({ todos, setTodos, setHide }) {
  //there are properties in this line. we access the parent's- which is Todo/index.js- props
  const unCompleted = todos.filter((check) => check.checked === false); //for count in footer-left

  const [select, setSelect] = useState("selected", "", ""); //this is select state. we have to initialize and default value is all

  const clearCompleted = (e) => {
    setTodos(todos.filter((todo) => todo.checked === false));
  };

  const selectedButton = (e) => {
    switch (
      e.target.id //Used because there are 3 options
    ) {
      case "All":
        setSelect(["selected", "", ""]);
        setHide("All");
        break;
      case "Active":
        setSelect(["", "selected", ""]);
        setHide("Active");
        break;
      case "Completed":
        setSelect(["", "", "selected"]);
        setHide("Completed");
        break;
      default:
    }
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length}</strong>
        {unCompleted.length > 1 ? " items left" : " item left"}{/*control */}
      </span>

      <ul className="filters">{/*static way used for now */}
        <li>
          <a className={select[0]} id="All" onClick={selectedButton}>
            All
          </a>
        </li>
        <li>
          <a className={select[1]} id="Active" onClick={selectedButton}>
            Active
          </a>
        </li>
        <li>
          <a className={select[2]} id="Completed" onClick={selectedButton}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
