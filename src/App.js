import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

let id = 4;
class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      error: false
    }
    //this.createTask = this.createTask.bind(this)
  }

  createTask = (e) =>{
    e.preventDefault()
    if (this.state.newTask){
      this.setState({tasks: this.state.tasks.concat({id, name: this.state.newTask, done: false}), newTask: "", error: false })
    id ++
    }
    else{
      this.setState({error: true});
    }
  }

  toggleTask = id =>{
    this.setState({
      tasks: this.state.tasks.map(task => task.id === id ? { ...task, done: !task.done} : task )
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li key={task.id} className={task.done ? 'done' : null} onClick={() => this.toggleTask(task.id)}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.createTask}>
            <input type="text" id="new-task" className={this.state.error ? 'error' : null} placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={e => this.setState({newTask: e.target.value})} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
