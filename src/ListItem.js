import "./styles/listItem.css";
import { useState } from "react";
import Item from "./Item";

export default function ListItem({ listItems }) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [displayed, setDisplayed] = useState(false);

  const addTask = (itemId) => {
    if (input === "") {
      return;
    }
    const newTask = {
      taskId: itemId,
      id: Math.floor(Math.random() * 100),
      text: input
    };
    const newTasksList = [...tasks, newTask];
    setTasks(newTasksList);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    //hideElement(e);
  };

  const hideElement = (el) => {
    el.target.parentElement.classList.add("hide");
    document.querySelector(".listItem__addItem").classList.remove("hide");
    setDisplayed(false);
  };

  const addItem = () => {
    setDisplayed(true);
  };

  return listItems.map((item, index) => (
    <div className="listItem__wrapper" key={item.id}>
      <div className="listItem__item" key={item.id}>
        <div className="listItem__header">{item.text}</div>
        <Item itemId={item.id} tasks={tasks} />
        <div
          className={`listItem__addItem ${displayed === true ? "hide" : ""}`}
          onClick={addItem}
          key={item.id}
        >
          <span className="listItem__addItemBtn">+</span>Add a item...
        </div>
        <div
          className={`listItem__newTaskItem ${
            displayed === false ? "hide" : ""
          }`}
        >
          <textarea
            className="listItem__taskArea"
            key={item.id}
            placeholder="Add a task..."
            onBlur={handleChange}
            rows="2"
            cols="22"
          ></textarea>
          <button
            className="listItem__addTaskButton"
            onClick={() => addTask(item.id)}
          >
            Add a task...
          </button>
        </div>
      </div>
    </div>
  ));
}
