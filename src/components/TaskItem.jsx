export const TaskItem = ({ task }) => {
    return (
        <div className='button2'>
            <input type='checkbox' className='checkbox' />
            <div className='task-text'>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
            <button className='delete'>delete</button>
        </div>
    );
};
