import { useState, useEffect } from 'react';
import { List } from 'antd';

export default function Task({ item, setTasks }) {
  const [itemStyle, setItemStyle] = useState({})
  useEffect(() => {
    if(item.done) {
      setItemStyle({ color: 'grey', textDecoration: 'line-through' });
    } else {
      setItemStyle({ color: 'black', textDecoration: 'none' });
    }
  }, [item])
  const handleToggleTaskDone = () => {
    // call api -- patch: `/tasks/${item.id}` send { done: !item.done }
    fetch(`https://much-todo-bc.uc.r.appspot.com/tasks/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ done: !item.done })
    })
      .then(() => {
        // THEN: fetch our tasks
        fetch('https://much-todo-bc.uc.r.appspot.com/tasks')
          .then(response => response.json())
          .then(data => setTasks(data))
      })
      .catch(alert)
  }
  return <List.Item onClick={handleToggleTaskDone} style={itemStyle}>{item.task}</List.Item>
}