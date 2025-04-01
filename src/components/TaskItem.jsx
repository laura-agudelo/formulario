import React from 'react';

export const TaskItem = ({ task }) => {
    return (
        <div className='boton2'>
            <input type='checkbox' />
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    );
};
