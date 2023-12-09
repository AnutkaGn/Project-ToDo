import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToList } from '../store/todoSlice';

const AddTaskForm = () => {
    const [name, setName] = useState("");
    const [description, setDescrition] = useState("");
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addToList({ name, description, status: false }));
    }

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "400px", marginBottom: "20px"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <label htmlFor="taskName">Name</label>
                <input name='taskName' type="text" onChange={e => setName(prev => prev = e.target.value)}/>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <label htmlFor="taskDescription">Description</label>
                <input name='taskDescription' type="text" onChange={e => setDescrition(prev => prev = e.target.value)}/>
            </div>
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default AddTaskForm;
