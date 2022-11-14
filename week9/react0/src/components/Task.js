import React from "react";
import {FaTimes} from "react-icons/fa"

export default function Task({task,deleteHandler}){
    return(
        <li>
            <div className="taskContainer">
                <div className="iconContainer">
                    <p>{task.title}</p>
                    <FaTimes
                    onClick={()=>deleteHandler(task.id)}/>
                </div>           
                <p>{task.date}</p>
            </div>
        </li>      
        );
    }