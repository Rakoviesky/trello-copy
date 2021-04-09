import "./styles/item.css";
import {Draggable} from "react-beautiful-dnd";

const Item = ({ tasks, itemId }) => {
  return tasks.map(
    (task,index) =>
      task.taskId === itemId && (
        <Draggable draggableId={task.taskId.toString()} index={index}>
        { 
          provided => (
            <div 
              className="item" 
              key={tasks.id} 
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {task.text}
            </div>
          )
        }
        </Draggable>
      )
  );
};

export default Item;
