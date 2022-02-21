import { useState, useEffect } from 'react'
import { List } from 'antd'
import Task from './Task'

export default function TaskList() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    // GET DATA FROM API
    fetch('https://much-todo-bc.uc.r.appspot.com/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(alert)
  }, [])

  return (
    <>
      <ul>
        {tasks &&
          tasks.map(singleTask => {
            return <li key={singleTask.id}>{singleTask.task}</li>
          })}
      </ul>
    </>
  )
}
