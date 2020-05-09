import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSections } from './../api/sectionapi';

export const fetchSections = createAsyncThunk(
  "section/fetchSections",
  async (userId, thunkAPI) => {
    const response = await getSections();
    return response.data;
  }
);

const sectionSlice = createSlice({
  name: "section",
  initialState: {data:[]},
  reducers: {
    addSection(state, action) {
      console.log(action.payload);
    },
  },
  extraReducers: {
    [fetchSections.fulfilled]: (state, action) => {
      state.data = [...action.payload];
    }
  }
});


export const { addSection } = sectionSlice.actions;

export default sectionSlice.reducer;
