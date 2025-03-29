import React, { useState } from 'react'
import './Task.css'

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
                    <div className='boton2'>
                    <input type='checkbox' />
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
                ))

                }
            </div>
            </section>
        </>
    )
}
