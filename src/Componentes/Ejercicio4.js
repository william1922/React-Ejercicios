import {Form, Button} from "react-bootstrap";
import { useState, useEffect } from "react";
import { TaskList } from "./TaskList";

export const TaskForm = () => {
    let tareasLocalStorage = JSON.parse(localStorage.getItem("taskList")) || [];
    const [taskList, setTaskList] = useState(tareasLocalStorage);
    const [task, setTask] = useState("");
  
    useEffect(() => {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }, [taskList]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setTaskList([...taskList, task]);
      setTask("");
    };
  
    const deleteTask = (nameTask) => {
      let _taskList = taskList.filter((item) => {
        return item !== nameTask;
      });
      setTaskList(_taskList);
    };
  
    return (
      <div className="d-flex flex-column align-items-center">
        <Form onSubmit={handleSubmit} className="w-50">
          <Form.Group className="mb-3 d-flex">
            <Form.Control
              type="text"
              placeholder="Ingrese una tarea"
              onChange={(e) => setTask(e.target.value.trimStart())}
              value={task}
            />
            <Button variant="primary" type="submit">Guardar
            </Button>
          </Form.Group>
        </Form>
        <TaskList className="w-50" taskList={taskList} deleteTask={deleteTask}></TaskList>
      </div>
    );
  };