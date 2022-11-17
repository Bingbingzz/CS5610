import React,{useState} from "react";
import Task from "./Task";

export default function TaskList(){
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Review week 9 material',
            date: 'June 4th at 1 pm',
            },
            {
            id: 2,
            title : 'Do quiz 9',
            date: 'June 4th at 6 pm',
            },
            {
            id: 3,
            title : 'Work on assignment 2',
            date: 'June 5th at 8 am',
            },
        ]);

    const deletePressed = (deletID) =>{
        console.log("pressed",deletID);
        const result = tasks.filter((item)=>{
            return item.id!==deletID
        });
        setTasks(result);    
    };
    // {tasks.length === 0 ?(
    //     <li>No task left</li>
    // ):(
        
    // )
    // }

    // return(
    //     <>
    //         {tasks.map((item)=>{
    //             return <Task key={item.id}  task={item} deleteHandler={deletePressed}/>;  
    //         })}
    //     </>
    // );      

    return tasks.length === 0?(
        <li>No tasks left</li>
    ) : (
        tasks.map((item) =>(
            <Task key={item.id} task={item} deleteHandler={deletePressed} />
    ))
    );
}
