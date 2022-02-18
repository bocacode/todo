import { useState, useEffect } from 'react'
import { List } from 'antd'
import Task from './Task'

// const fakeTasks = [
//   { id: 1, task: 'Buy Milk', done: false },
//   { id: 2, task: 'Brew Beer', done: true },
//   { id: 3, task: 'Buy Trulys', done: false },
//   { id: 4, task: 'Drink Wine', done: true },
//   { id: 5, task: 'Buy Paper Towels', done: false },
//   { id: 6, task: 'Buy beer', done: false },
// ]

export default function TaskList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    // GET DATA FROM API
    fetch('https://much-todo-bc.uc.r.appspot.com/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(alert)
  }, [])

  // tasks has all the data

  // we need to pass this TASKS => data to the List component
  // return <List bordered dataSource={tasks} renderItem={item => <Task item={item} />} />

  return (
    <>
      <ul>
        {tasks &&
          tasks.map(singleTask => {
            return <li key={singleTask.id}>{singleTask.task}</li>
          })}

        <li>item 2 </li>
        <li>item 3</li>
      </ul>
    </>
  )
}
