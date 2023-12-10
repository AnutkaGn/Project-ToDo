import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromList } from '../../../store/todoSlice';
import binBtn from '../../../assets/binBtn.png';
import './task.css';

const Task = ({ name, description, status }) => {
    const dispatch = useDispatch();

    const deleteTask = () => {
        dispatch(removeFromList({name, description, status}));
    }
    const handleCheckbox = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className='task'>
            <label className="checkbox"><input type="checkbox" onChange={handleCheckbox} /><span className="checkmark"></span></label>
            <div className="text name">{name}</div>
            <div className="text desc">{description}</div>
            <button className='deleteBtn' onClick={deleteTask}><img src={binBtn} alt="" /></button>
        </div>
    );
}

export default Task;
