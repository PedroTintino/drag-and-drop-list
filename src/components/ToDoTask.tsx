import { TaskInterface } from "../Interfaces";
import { MdOutlineDone } from "react-icons/md";

export interface CompleteTask{
    task: TaskInterface,
    completeTask(taskNameToDelete: string): void
}

function ToDoTask({task, completeTask}:CompleteTask){
    return(
        <article 
        className="bg-gray-100 w-full rounded p-2 mt-2">
          <p><span className="font-medium">{task.taskName}</span><button 
          className="float-right"
          onClick={() => {
            completeTask(task.taskName)
          }}><MdOutlineDone size={28} color="green"/></button></p>
        </article>
    )
}

export default ToDoTask;