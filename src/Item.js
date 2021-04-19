import "./styles/item.css";
import {Draggable} from "react-beautiful-dnd";

const Item = ({ tasks, itemId }) => {
  return tasks.map(
    (task,index) =>
      task.taskId === itemId && (
        task.tasks.map((el,ind) => (
          <Draggable draggableId={el.id.toString()} index={ind} key={ind}> 
          { 
            provided => (
              <div 
                className="item" 
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                {el.text}
              </div>
            )
          }
          </Draggable>
        ))
      )
  );
};

export default Item;
