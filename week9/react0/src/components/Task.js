
import React from "react";
import {FaTimes} from "react-icons"
export default function Task({task}){
    return(
        <li key = {task.id}>
            <div>
                <p>{task.title}</p>  
                <FaTimes onClick = {()=>
                    console.log("CLicked!");

                }
                />  
            </div>    
            <div>
                <p>{task.date}</p
            </div>      
        </li>   
         );
        }