import { createSlice } from "@reduxjs/toolkit";

const toStorage = (state) => {
    localStorage.setItem('todo', JSON.stringify({ todoList: state.todoList }));
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: []
    },
    reducers: {
        addToList: (state, action) => {
            state.todoList = [...state.todoList, action.payload];
            toStorage(state);
        },
        removeFromList: (state, action) => {
            state.todoList = state.todoList.filter(task => JSON.stringify(task) !== JSON.stringify(action.payload));
            toStorage(state);
        },
        removeChecked: (state) => {
            state.todoList = state.todoList.filter(task => task.status !== true);
            toStorage(state);
        },
        toStorage: toStorage,
        fromStorage: (state, action) => {
            state.todoList = action.payload;
        }
    }
})

export const { addToList, removeFromList, removeChecked, fromStorage } = todoSlice.actions;
export default todoSlice.reducer;