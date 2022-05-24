import React from 'react';
import { Task } from './Interface';


interface props {
    task: Task;
    deleteTask(deleteTaskName: Number): void;
    updated(updateTask: string, updateNo: number): void;
    topHandle(top:string):any;
}
const TodoTask = ({ task,deleteTask,updated,topHandle}: props) => {
    const {taskName,taskNo} = task;

    return (
        <div className='task-container'>
           <p>{taskName} </p>
            <p>{taskNo}</p>
            <button onClick={() => deleteTask(taskNo)}>X</button>
            <button onClick={() => updated(taskName, taskNo)}>Update</button>
            <button onClick={()=>topHandle(taskName)}>Top</button>
        </div>
    );
};

export default TodoTask;