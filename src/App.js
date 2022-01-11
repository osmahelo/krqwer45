import React, { useState, useEffect } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

let id = 4;
function App() {
  
  const [tasks, setTasks] = useState ([]);
  const [newTask, setNewtask] = useState('');
  const [error, setError] = useState(false);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTasks(data.slice(0,4)));
  }, []);

  const createTask = (e) =>{
    e.preventDefault()
    if (newTask){
      setTasks([...tasks, {id, title: newTask, completed: false}])
      id ++
      setNewtask('')
    }
    else{
      setError(true);
    }
  }
  
  const deleteTask = i =>{
    setTasks(tasks.filter((tasks, j) => i !== j)
    )
  } 

  const toggleTask = id =>{
    setTasks(tasks.map(tasks => tasks.id === id ? { ...tasks, completed: !tasks.completed} : tasks )
    )
  }

    
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {tasks.map((task, index) => 
            <li key={task.id} className={task.completed ? 'done' : null}>
              {task.title}
              <button onClick={() => toggleTask(task.id)}>{task.completed ? "Undone" : "Done"}</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            )}
          </ul>
          <form onSubmit={createTask}>
            <input type="text" id="new-task" className={error ? 'error' : null} placeholder="Ingresa una tarea y oprime Enter" value={newTask} onChange={e => setNewtask(e.target.value)} />
          </form>
        </div>
      </div>
    )
  }


export default App;
