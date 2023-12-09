export interface TaskInterface{
    id: string ,
    taskName: string
}

export interface CompleteTask{
    task: TaskInterface,
    completeTask(taskNameToDelete: string): void,
    index: number

}