import React, { useState } from 'react'
import './Task.css'
import { TaskItem } from './TaskItem';
import { contextTask } from '../context/contex';

export const Task = () => {
    const[tasks,setTasks]= useState([]);
    const[title,setTitle]= useState('');
    const[description,setDescription]= useState('');

    const addTask =(e) =>{
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            title:title,
            description:description,
            completed:false
        };

        setTasks([...tasks, newTask]);
    }

    return (

        <>
            <section className='task-container'>
                <h1>To-Do-List</h1>
            <form onSubmit={addTask}>
            <input 
                type="text" 
                placeholder='Hacer ejercicio'
                value={title}
                onChange={(e) => setTitle(e.target.value.trim())} 
                 />
                <textarea 
                placeholder='Descripción'
                value={description}
                onChange={(e) => setDescription(e.target.value.trim())} 
                />

                <button className='add'>Add Task</button>

            </form>
            <div className='secondContainer'>
                <div>
                    <button>All</button>
                    <button>Pending</button>
                    <button>Completed</button>
                </div>

                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
            </section>
        </>
    )
}
