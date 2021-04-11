import "./styles/item.css";
import {Draggable} from "react-beautiful-dnd";

const Item = ({ tasks, itemId }) => {
  return tasks.tasks.map(
    (task,index) =>
      task.taskId === itemId && (

        <Draggable draggableId={task.id.toString()} index={index}>
        { 
          provided => (
            <div 
              className="item" 
              key={task.id} 
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
