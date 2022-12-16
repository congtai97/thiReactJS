import { createSelector } from '@reduxjs/toolkit'

export const todoListNote = (state) => state.data;

export const todoNoteSelector = createSelector((data) => {
    return data;
})