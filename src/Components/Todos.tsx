import React, {FC, useEffect, useState} from 'react';
import {Task} from './Interface';
import TodoTask from './TodoTask';
import './main.css';
import { json } from 'stream/consumers';

/*interface Task{
    taskName: string;
    taskNo: number;
}*/

const Todos: FC = () => {
    const initial = JSON.parse(localStorage.getItem("todo")||'');
    const [task, setTask] = useState<string>('');
    const [taskNo, setTaskNo] = useState<number>(0);
    const [todo, setTodo] = useState<Task[]>(initial);

    useEffect(()=> {
        localStorage.setItem("todo", JSON.stringify(todo));
    },[todo])
   
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        if (e.target.name === "task") {
            setTask(e.target.value); 
        }
        else {
            setTaskNo(Number(e.target.value));
        }
    }
    const addTask = (): void => {
        const newTodo = { taskName: task, taskNo: taskNo };
        if (task==='' || taskNo===0) {
            return;
        }
        else {
            setTodo([...todo, newTodo]);
            setTask('');
            setTaskNo(0);
        }       
    }

    const deleteTask = (deleteTaskName:Number):void => {
        setTodo(todo.filter(t => t.taskNo !== deleteTaskName));
    }

    const updated = (updateTask: string, updateNo: number): void => {
        const find = todo.find(t => {
            return t.taskName === updateTask;
        });
        //setTodo();
        console.dir(find?.taskName);
        //setTodo([find]);
        setTask(updateTask);
        setTaskNo(updateNo);
        
    }

    const topHandle = (top:string):any => {
        //const find = todo.find(t => {
        //    return t.taskName === top;
        //});
        todo.forEach(single => {
            //console.log(single);
            if (single.taskName === top) {
                setTodo([single, ...todo]);
                const a = (todo.lastIndexOf(single));
               
                
            }
            
        });
        
    }

    return (
        <div>
           <div className="todo-input">
           <h2>Todo list with typescript</h2>
           <div style={{display:'flex',alignItems:"center", justifyContent:"center",gap:"10px"}}>
           <p>Task Name</p>
            <input type="text" value={task} name="task" onChange={handleChange} placeholder='enter your homework name'/>
            <p>Task Number</p>
            <input type="number" value={taskNo} onChange={handleChange}  placeholder='enter your home work no'/>
           <button onClick={addTask}>Add Task f</button>
           </div>
           </div>
            <div>
                {
                    todo.map(task => <TodoTask task={task} deleteTask={deleteTask} updated={updated} topHandle={topHandle}/>)
                }
            </div>
        </div>
    );
};

export default Todos;