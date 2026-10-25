
import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  function addTask() {
    if (task.trim() === '') return

    setTasks([...tasks, {
      id: Date.now(),
      text: task,
      completed: false
    }])

    setTask('')
  }

  function toggleTask(id) {
    setTasks(tasks.map(item =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(item => item.id !== id))
  }

  return (
    <div className="app">
      <h1>My To-Do List</h1>

      <div className="input-area">
        <input
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Enter a task"
          onKeyDown={e => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map(item => (
          <li key={item.id}>
            <span
              onClick={() => toggleTask(item.id)}
              className={item.completed ? 'completed' : ''}
            >
              {item.text}
            </span>

            <button onClick={() => deleteTask(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
