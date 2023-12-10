import React from 'react';
import Task from './Task/Task';
import { useSelector } from 'react-redux';

const TaskList = () => {
    const tasks = useSelector(state => state.todo.todoList)

    return (
        <div style={{marginTop:"11px"}}>
            {tasks.map(({ name, description, status }) => <Task name={name} description={description} status={status} />)}
        </div>
    );
}

export default TaskList;
