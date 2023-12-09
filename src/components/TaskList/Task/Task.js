import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromList } from '../../../store/todoSlice';

const Task = ({ name, description, status }) => {
    const dispatch = useDispatch();

    const deleteTask = () => {
        dispatch(removeFromList({name, description, status}));
    }

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "300px"}}>
            <div><input type="checkbox"/></div>
            <div>{name}</div>
            <div>{description}</div>
            <button onClick={deleteTask}>Delete</button>
        </div>
    );
}

export default Task;
