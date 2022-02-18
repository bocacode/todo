import { useState, useEffect } from 'react';
import { List } from 'antd';
import Task from './Task';

const fakeTasks = [
  { id: 1, task: 'Buy Milk', done: false },
  { id: 2, task: 'Brew Beer', done: false },
  { id: 3, task: 'Buy Trulys', done: false },
  { id: 4, task: 'Drink Wine', done: false },
  { id: 5, task: 'Buy Paper Towels', done: false },
]

export default function TaskList() {
  const [tasks, setTasks] = useState(fakeTasks)
  return (
    <List
      bordered
      dataSource={tasks}
      renderItem={item => <Task item={item} />}
    />
  )
}