import "./styles/item.css";

const Item = ({ tasks, itemId }) => {
  return tasks.map(
    (task) =>
      task.taskId === itemId && (
        <div className="item" key={tasks.id}>
          {task.text}
        </div>
      )
  );
};

export default Item;
