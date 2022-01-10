import React, { useState } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

let id = 4;
function App() {
  
  const [tasks, setTasks] = useState ([
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ]);
  const [newTask, setNewtask] = useState('');
  const [error, setError] = useState(false);
  
  

  const createTask = (e) =>{
    e.preventDefault()
    if (newTask){
      setTasks([...tasks, {id, name: newTask, done: false}])
      id ++
      setNewtask('')
    }
    else{
      setError(true);
    }
  }
  
  const toggleTask = id =>{
    setTasks(tasks.map(tasks => tasks.id === id ? { ...tasks, done: !tasks.done} : tasks )
    )
  }

  
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {tasks.map((task, index) => <li key={task.id} className={task.done ? 'done' : null} onClick={() => toggleTask(task.id)}>{task.name}</li>)}
          </ul>
          <form onSubmit={createTask}>
            <input type="text" id="new-task" className={error ? 'error' : null} placeholder="Ingresa una tarea y oprime Enter" value={newTask} onChange={e => setNewtask(e.target.value)} />
          </form>
        </div>
      </div>
    )
  }


export default App;
