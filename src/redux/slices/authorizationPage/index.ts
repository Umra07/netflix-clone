import { createSlice } from '@reduxjs/toolkit';

interface initialStateTypes {
  authorized: boolean;
}

const initialState: initialStateTypes = {
  authorized: false,
};

const authorizationPageSlice = createSlice({
  name: 'authorizationPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

console.log(authorizationPageSlice);

export default authorizationPageSlice.reducer;
