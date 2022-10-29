import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export const Task = ({ taskName, deleteTask }) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {taskName}
            <Button variant="outline-danger" onClick={() => deleteTask(taskName)}>
                X
            </Button>
        </ListGroup.Item>
    )
}
