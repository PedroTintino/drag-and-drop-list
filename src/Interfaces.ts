export interface TaskInterface{
    id: number,
    taskName: string
}

export interface completeTask{
    completeTask(taskNameToDelete: string): void
}