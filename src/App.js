import ListItem from "./ListItem";
import "./styles/app.css";
import WishField from "./WishField";
import { useState } from "react";
import {DragDropContext} from "react-beautiful-dnd";

export default function App() {
  const [listItems, setListItems] = useState([]);
  const addTodo = (listItem) => {
    if (listItem.text === "") {
      return;
    }
    const newListItems = [listItem, ...listItems];
    setListItems(newListItems);
  };

  const onDragEnd = result =>{
    //add later something
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <WishField onSubmit={addTodo} />
      <ListItem listItems={listItems} />
    </div>
    </DragDropContext>
  );
}
