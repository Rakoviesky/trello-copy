import "./styles/listItem.css";
import { useState } from "react";
import Item from "./Item";
import {Droppable} from "react-beautiful-dnd";

export default function ListItem({ listItems }) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (itemId) => {
    if (input === "") {
      console.log('pusty INPUT!')
      return;
    }

    // task constructor
    const task = {
      id: Math.floor(Math.random() * 100),
      text: input
    }
    
    /* Checking if exists some tasks */  
    const index = tasks.findIndex((el  => el.taskId === itemId))
    if(index > -1){
      tasks[index].tasks.push(task)
      setTasks([...tasks])
    }else{
      const newTask = {
        taskId: itemId,
        tasks:[task]
      };

      const newTasksList = [...tasks, newTask];
      console.log(newTasksList)
      setTasks(newTasksList);
      setInput("");
    }

    console.log(tasks)
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
    
        <div className="listItem__wrapper" key={item.id}>
          <Droppable droppableId={item.id.toString()}>{
            provided=>(
              <div className="listItem__item" ref={provided.innerRef} {...provided.droppableProps} >
                <div className="listItem__header">{item.text}</div>
                <Item itemId={item.id} tasks={tasks} />
                <div className="listItem__addItem" onClick={addItem}>
                  <span className="listItem__addItemBtn">+</span>Add a item...
                </div>
                <div
                  className="listItem__newTaskItem hide"
                >
                  <textarea
                    className="listItem__taskArea"
                    placeholder="Add a task..."
                    onChange={handleChange}
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
                {provided.placeholder}
              </div>
              )
            }
          </Droppable>
        </div>     
 
  ));
}
