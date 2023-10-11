import { createSlice } from '@reduxjs/toolkit';
import { StateModel } from './auth.model';

const initialState: StateModel = {
  loading: false,
  token: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
