import { ChangeEvent, useState } from "react";
import { TaskInterface } from "./Interfaces";
import ToDoTask from "./components/ToDoTask";

function App(){

  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<TaskInterface[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault;
    if(e.target.name == 'task'){
      setTask(e.target.value);
    }
  }

  const createTask = () => {
    const newTask = {
      taskName: task
    }
    if(!task){
      return alert('Empty values not allowed!')
    }
    setTodo([...todo, newTask]);
    setTask('')
  }

  const completeTask = (taskNameToDelete: string) =>{
    setTodo(todo.filter((task) =>{
      return task.taskName != taskNameToDelete
    }))
  }

  return(
    <div className="App w-full min-h-screen flex justify-center bg-gray-900 px-4">
      <main className="my-10 w-full md:max-w-lg">
        <h1 className="text-white font-medium text-3xl text-center my-8">My Task List</h1>
        <form className=" my-2 flex justify-center flex-col">
          <input type="text" 
          placeholder="What you got to do?" 
          className="p-3 rounded placeholder:font-bold italic text-black"
          name="task" value={task} onChange={handleChange}/>
          <button 
          className="
          text-white bg-green-600 rounded p-2 font-medium 
          hover:bg-green-800 duration-100  mb-2" 
          type="button"
          onClick={createTask}>
            Create
          </button>
        </form>
            {todo.map((task:TaskInterface, key:number) => (
              <ToDoTask key={key} task={task} completeTask={completeTask} />
            ))}
      </main>
    </div>
  )
}

export default App;