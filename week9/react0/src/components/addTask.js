import React, { useState } from 'react'

export default function addTask() {
  const [title,setTitle] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("submitted", { title: title, date: date })
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="form-control">
    <label>Title</label>
    <input 
    type="text" 
    value = {title} 
    onChange={(e) => setTitle(e.target.value)}
    />
    </div>

    <div className="form-control">
    <label>Date</label>
    <input type="text" 
    value ={date}
    onChange={(e) => setDate(e.target.value)}
    ></input>
    </div>
    <input type="submit" value="Save Task"/>
    </form>
  )
}
