import { createSlice } from '@reduxjs/toolkit';
import { initialStateTypes } from './types';
import { fetchInviteMovie } from './heroSliceAsync';
const initialState: initialStateTypes = {
  movie: {},
};

const heroSlice = createSlice({
  name: 'inviteMovie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInviteMovie.fulfilled, (state, action) => {
        state.movie = { ...action.payload };
      })
      .addCase(fetchInviteMovie.rejected, (state) => {
        state.movie = {};
      });
  },
});

export default heroSlice.reducer;
