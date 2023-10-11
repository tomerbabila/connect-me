import { createSlice } from '@reduxjs/toolkit';
import { getToken } from './auth.actions';
import { AuthErrorModel, StateModel } from './auth.model';

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
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.token = payload;
      state.success = true;
    });
    builder.addCase(getToken.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getToken.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload as unknown as AuthErrorModel;
    });
  },
});

export default authSlice.reducer;
