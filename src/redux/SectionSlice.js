import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const sectionSlice = createSlice({
    name: 'section',
    initialState: [],
    reducers: {
        addSection(state, action) {
            console.log(action.payload);
        }
    }
});

export const {
    addSection
} = sectionSlice.actions;

export default sectionSlice.reducer;