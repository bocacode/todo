import { useState } from "react"
import { Input } from "antd";


export default function NewTask() {
  const [task, setTask] = useState("");
  
  return (
    <>
      <Input placeholder="Enter task name" />
    </>
  );
}