import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromList, updateStatus } from '../../../store/todoSlice';
import binBtn from '../../../assets/binBtn.png';
import './task.css';

const Task = ({ id, name, description, status }) => {
    const dispatch = useDispatch();

    const deleteTask = () => {
        dispatch(removeFromList({ id, name, description, status }));
    }

    const handleCheckbox = () => {
        dispatch(updateStatus({ id, name, description, status: !status }));
    }

    return (
        <div className='task'>
            <label className="checkbox"><input type="checkbox" onChange={handleCheckbox} value={status}/><span className="checkmark"></span></label>
            <div className="text name">{name}</div>
            <div className="text desc">{description}</div>
            <button className='deleteBtn' onClick={deleteTask}><img src={binBtn} alt="" /></button>
        </div>
    );
}

export default Task;
