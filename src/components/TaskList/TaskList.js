import React from 'react';
import Task from './Task/Task';
import { useSelector } from 'react-redux';

const TaskList = () => {
    const tasks = useSelector(state => state.todo.todoList)

    return (
        <div style={{marginTop:"11px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            {tasks.map(({ id, name, description, status }) => <Task id={id} name={name} description={description} status={status} key={id} />)}
        </div>
    );
}

export default TaskList;
