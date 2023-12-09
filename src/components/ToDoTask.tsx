import { TaskInterface } from "../Interfaces";
import { MdOutlineDone } from "react-icons/md";
import { Draggable } from "@hello-pangea/dnd";

export interface CompleteTask {
  task: TaskInterface;
  completeTask(taskNameToDelete: string): void;
  index:number;
}

function ToDoTask({ task, index, completeTask }: CompleteTask) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <article className="bg-gray-200 w-full rounded p-2 mt-2 hover:scale-105 duration-150 cursor-pointer"
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        {...provided.draggableProps}>
          <p>
            <span className="font-medium">{task.taskName}</span>
            <button
              className="float-right"
              onClick={() => {
                completeTask(task.taskName);
              }}
            >
              <MdOutlineDone size={28} color="green" />
            </button>
          </p>
        </article>
      )}
    </Draggable>
  );
}

export default ToDoTask;
