import React from "react";
import {ListGroup} from "react-bootstrap";
import { Task } from "./Task";

export const TaskList = ({taskList, deleteTask}) => {
    return (
        <ListGroup className="w-50">
            {
                taskList.map((task, index) => <Task key={index} taskName={task} deleteTask={deleteTask}></Task>)
            }
        </ListGroup>
    )
}