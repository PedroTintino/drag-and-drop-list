export interface TaskInterface{
    taskName: string
}

export interface completeTask{
    completeTask(taskNameToDelete: string): void
}