import { useState } from "react";
import "./styles/wishField.css";

export default function WishField(props) {
  const [input, setInput] = useState("");
  const [displayed, setDisplayed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input
    });
    setInput("");
    setDisplayed(false);
  };

  const addList = () => {
    setDisplayed(true);
  };

  const removeListInput = () => {
    setDisplayed(false);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className={`listAdd ${displayed ? "displayed" : ""}`} onClick={addList}>
        <span className="listAdd__add">+</span>Add a list...
      </div>
      <div className={`wishField ${displayed === false ? "displayed" : ""}`}>
        <form onSubmit={handleSubmit}>
          <input
            className="wishField__input"
            type="text"
            onChange={handleChange}
            value={input}
            placeholder="Type a list name..."
          />
          <button className="wishField__addButton">Add a list</button>
          <input
            className="wishField__removeButton"
            type="button"
            value="X"
            onClick={removeListInput}
          />
        </form>
      </div>
    </>
  );
}
