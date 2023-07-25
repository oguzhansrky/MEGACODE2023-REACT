import { createSlice } from '@reduxjs/toolkit';

export const LoginSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
    },
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload;
        },
        logOut: (state) => {
            state.currentUser = null;
        },
        updateUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }
})

export const { login, logOut, updateUser } = LoginSlice.actions;
export default LoginSlice.reducer;