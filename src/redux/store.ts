import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import mainPageReducer from './slices/mainPage';
import authorizationPageReducer from './slices/authorizationPage';

export const store = configureStore({
  reducer: {
    main: mainPageReducer,
    authorization: authorizationPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
