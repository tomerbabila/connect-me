import { configureStore } from '@reduxjs/toolkit';
import generalSlice from './features/general.slice';
import authSlice from './features/auth/auth.slice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    general: generalSlice,
    auth: authSlice,
  },
  devTools: process.env.NODE_ENV !== 'development' ? false : true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
