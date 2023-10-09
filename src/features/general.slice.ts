import { createSlice } from '@reduxjs/toolkit';

export const generalSlice = createSlice({
  name: 'general',
  initialState: {},
  reducers: {
    getData: (state, action) => {},
  },
});

export const { getData } = generalSlice.actions;

export default generalSlice.reducer;
