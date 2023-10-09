import { configureStore } from '@reduxjs/toolkit';
import generalSlice from './features/general.slice';

const store = configureStore({
  reducer: {
    general: generalSlice,
  },
  devTools: process.env.NODE_ENV !== 'development' ? false : true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
