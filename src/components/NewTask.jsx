import { Input } from 'antd'
import { useState } from 'react'

export default function NewTask() {
  const [newTask, setNewTask] = useState('')

  const taskObject = {
    task: newTask,
  }

  const handleButtonSubmit = () => {
    console.log('sending to API')

    fetch('https://much-todo-bc.uc.r.appspot.com/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskObject),
    })
      .then(response => response.json())
      .then(data => console.log('data was added', data))
      .catch(err => console.error(err))
  }

  const handleInputText = event => {
    setNewTask(event.target.value)
  }

  console.log('newTask state here ->>', newTask)

  return (
    <>
      <h2>Add new task</h2>
      <Input placeholder='Enter task name' onChange={event => handleInputText(event)} />

      <button onClick={handleButtonSubmit}>Send new task to api</button>
    </>
  )
}
