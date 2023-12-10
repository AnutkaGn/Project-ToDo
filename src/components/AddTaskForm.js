import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToList } from '../store/todoSlice';
import './addTaskForm.css';
import addBtn from '../assets/add.png';

const AddTaskForm = () => {
    const [name, setName] = useState("");
    const [description, setDescrition] = useState("");
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addToList({ name, description, status: false }));
        setName(prev => prev = "");
        setDescrition(prev => prev = "");
    }

    return (
        <div className='wrapperAdd'>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <label className='nameLabelTask' htmlFor="taskName">Name</label>
                <input className='nameTask' name='taskName' type="text" value={name} onChange={e => setName(prev => prev = e.target.value)}/>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <label className='descriptionLabelTask' htmlFor="taskDescription">Description</label>
                <input className='descriptionTask' name='taskDescription' type="text" value={description} onChange={e => setDescrition(prev => prev = e.target.value)}/>
            </div>
            <button className='addButton' onClick={addTask}><img src={addBtn} alt="add"/></button>
        </div>
    );
}

export default AddTaskForm;
