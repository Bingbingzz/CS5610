import React, { Component }  from 'react';
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const appName = "My app";
  return (
    <div className="App">
      <Header name = {appName}/>
      <ul>
        <TaskList/>
      </ul>
    </div>
  );
}

export default App;
