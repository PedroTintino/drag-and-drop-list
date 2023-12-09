import { ChangeEvent, useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { TaskInterface } from "./Interfaces";
import ToDoTask from "./components/ToDoTask";

function App(){

  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<TaskInterface[]>(() => {
    const storedTodo = localStorage.getItem('todo');
    return storedTodo ? JSON.parse(storedTodo) : []
  });

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);


  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault;
    if(e.target.name == 'task'){
      setTask(e.target.value);
    }
  }

  const createTask = () => {
    const newTask = {
      id: String(new Date().getTime()),
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

  function reorder<T>(list: T[], startIndex: number, endIndex: number){
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0 , removed)

    return result;
  }

  function onDragEnd(result: any){
    if(!result.destination){
      return;
    }

    const items = reorder(todo, result.source.index, result.destination.index)

    setTodo(items)
    
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
          text-white bg-purple-600 rounded p-2 font-medium 
          hover:bg-purple-800 duration-100  mb-2" 
          type="button"
          onClick={createTask}>
            Create
          </button>
        </form>
          <section className="bg-white rounded p-2">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="tasks" type="list" direction="vertical">
                {(provided) => (
                        <article ref={provided.innerRef} {...provided.droppableProps}>
                          {todo.map((task:TaskInterface, index) => (
                            <ToDoTask key={task.id} task={task} completeTask={completeTask} index={index} />
                          ))}
                          {provided.placeholder}
                        </article>
                )}
              </Droppable>
            </DragDropContext>
          </section>
      </main>
    </div>
  )
}

export default App;