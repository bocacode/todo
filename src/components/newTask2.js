import { Button, Input } from "antd";
import { useState } from "react";


export default function NewTask2() {

    const [taskName, setTaskName ] = useState('')

    const createNewTask2 = () => {
        fetch('https://much-todo-bc.uc.r.appspot.com/tasks',
        {
            method: 'POST',
            body:JSON.stringify({ task: taskName }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        // .then(res => res.json())
        .then(data => {
            setTaskName('')
        } )
    }

    return (
    <>    
        <Input placeholder="Enter task name" onChange={ (e) => setTaskName(e.target.value)} />
        <Button onClick={() => createNewTask()}>Add Task</Button>
    </>
    )
}