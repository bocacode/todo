import { useEffect } from 'react'
import { List } from 'antd'
import Task from './Task'

export default function TaskList({ tasks, setTasks }) {
  useEffect(() => {
    // GET DATA FROM API
    fetch('https://much-todo-bc.uc.r.appspot.com/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(alert)
  }, [])

  return (
    <List
      dataSource={tasks}
      size="large"
      bordered
      renderItem={item => <Task item={item} setTasks={setTasks} />}
    />
  )
}
