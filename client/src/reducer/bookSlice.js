import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
  },
   reducers: {
    booksList:(state,action) => {
      state.books = action.payload;
    },
  },
});

export const { booksList } = bookSlice.actions;

export const selectBooksList = (state) => state.book.books;

export default bookSlice.reducer;
