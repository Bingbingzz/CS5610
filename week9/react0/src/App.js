import React from "react";
import { useState } from "react";
import addTask from "./components/addTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const appName = "My App";
  const [showForm, setShowForm] = useState(false);

  const onAddTaskToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Header name={appName} onAddTaskToggle={onAddTaskToggle} />
      {showForm && <addTask />}
      <ul>
        <TaskList />
      </ul>
    </div>
  );
}

export default App;