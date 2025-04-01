import { createContext,useState } from "react";

export const contextTask = createContext();

export const ProviderTask = ({ children }) => { 

    const[tasks,setTasks]= useState([]);
    const[title,setTitle]= useState('');
    const[description,setDescription]= useState('');
    const [filter, setFilter] = useState('all');

    const addTask = () => {
        const newTask = {
            id: Date.now(),
            title: title,
            description: description,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setTitle('');
        setDescription('');
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const filteredTasks = tasks.filter(task => 
        filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed
    );

    return(
        <contextTask.Provider value={{
            tasks,
            setTasks,
            title,
            setTitle,
            description,
            setDescription
        }}>
            {children}

        </contextTask.Provider>
    )

}