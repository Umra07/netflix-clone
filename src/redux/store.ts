import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import heroReducer from './slices/heroSlice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
