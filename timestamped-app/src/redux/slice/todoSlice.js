import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const todoSlice = createSlice({
    name: "notesapp",
    initialState: {
        data: [],
    },
    reducers: {
        addNewNote: (state, action) => {
            console.log({action, state});
            state.data = [action.payload, ...state.data];
        },
        deleteNote: (state, action) => {
            const newList = [...state.data];
            newList.splice(action.payload, 1)
            state.data = newList;
        },
        
    },
})

export const {  addNewNote, deleteNote } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;