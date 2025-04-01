import { createContext,useState } from "react";

export const contextTask = createContext();

export const ProviderTask = ({ children }) => { 

    const[tasks,setTasks]= useState([]);
    const[title,setTitle]= useState('');
    const[description,setDescription]= useState('');

    

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