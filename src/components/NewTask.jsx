import { Input } from 'antd'
import { useState } from 'react'

export default function NewTask({ setTasks }) {
  const [newTask, setNewTask] = useState('')
  const handleButtonSubmit = () => {
    if(newTask.trim() === '') { // if the new task is empty
      return // don't do anything
    }
    const taskObject = {
      task: newTask,
    }
    fetch('https://much-todo-bc.uc.r.appspot.com/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskObject),
    })
      .then(() => {
        setNewTask('')
         // cool, we added a new task, now lets update the list
        fetch('https://much-todo-bc.uc.r.appspot.com/tasks')
          .then(response => response.json())
          .then(data => setTasks(data))
      })
      .catch(err => console.error(err))
  }
  const handleInputText = event => {
    setNewTask(event.target.value)
  }
  return (
      <Input.Search
        value={newTask}
        placeholder='Enter task name'
        enterButton='Add Task'
        size="large"
        onSearch={handleButtonSubmit}
        onChange={handleInputText} />
  )
}
