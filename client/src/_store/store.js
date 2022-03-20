import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../reducer/bookSlice';

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
