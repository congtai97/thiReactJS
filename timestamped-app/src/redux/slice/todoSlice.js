import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: localStorage.getItem("NotesApp")
    ? JSON.parse(localStorage.getItem("NotesApp"))
    : [],
}

// const initialState = {
//     data: []
// }

const todoSlice = createSlice({
    name: "notesapp",
    initialState,
    reducers: {
        addNewNote: (state, action) => {
            console.log({action, state});
            state.data = [action.payload, ...state.data];
        },
        deleteNote: (state, action) => {
            // const newList = [...state.data];
            // newList.splice(action.payload, 1)
            // state.data = newList;
            const newNote = state.data.filter(
                (item) => item.id !== action.payload.id
            )
            state.data = newNote
            localStorage.setItem("NotesApp", JSON.stringify(state.data));
        },
        detailNote: (state, action) => {
            // const newNote = state.data.filter(
            //     (item) => item.id === action.payload.id
            // )
            // state.data = newNote
        }
    },
})

export const {  addNewNote, deleteNote, detailNote } = todoSlice.actions;

export const selectNote = (state) =>  state.notesapp.data;

export const todoReducer = todoSlice.reducer;