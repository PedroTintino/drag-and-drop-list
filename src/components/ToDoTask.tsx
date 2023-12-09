import { TaskInterface } from "../Interfaces";
import { MdOutlineDone } from "react-icons/md";

export interface CompleteTask{
    task: TaskInterface,
    completeTask(taskNameToDelete: string): void
}

function ToDoTask({task, completeTask}:CompleteTask){
    return(
        <article 
        className="bg-gray-200 w-full rounded p-2 mt-2 hover:scale-105 duration-150 cursor-pointer">
          <p><span className="font-medium">{task.id}{task.taskName}</span><button 
          className="float-right"
          onClick={() => {
            completeTask(task.taskName)
          }}><MdOutlineDone size={28} color="green"/></button></p>
        </article>
    )
}

export default ToDoTask;