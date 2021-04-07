import "./styles/listItem.css";
import { useState } from "react";
import Item from "./Item";
import {Droppable} from "react-beautiful-dnd";

export default function ListItem({ listItems }) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

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
  };

  const hideElement = () => {
    let newTaskItem = document.querySelector('.listItem__newTaskItem:not(.hide)')
    if(newTaskItem != null){
      let addItemBtn = newTaskItem.parentElement.children[newTaskItem.parentElement.children.length - 2]
      addItemBtn.classList.remove('hide')
      newTaskItem.classList.add('hide')
    }
  };

  const addItem = (e) => {
    hideElement()
    e.currentTarget.classList.add("hide")
    e.currentTarget.parentElement.children[e.currentTarget.parentElement.children.length - 1].classList.remove("hide")
  };

  return listItems.map((item, index) => (
    <div className="listItem__wrapper" >
      <div className="listItem__item" >
        <div className="listItem__header">{item.text}</div>
        <Item itemId={item.id} tasks={tasks} />
        <div
          className="listItem__addItem"
          onClick={addItem}
          
        >
          <span className="listItem__addItemBtn">+</span>Add a item...
        </div>
        <div
          className="listItem__newTaskItem hide"
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
