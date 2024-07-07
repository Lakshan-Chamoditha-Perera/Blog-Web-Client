import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.user = null
        },
        loginSuccess: (state, action) => {
            state.user = action.payload
        },
        loginFailure: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout
} = userSlice.actions;

export default userSlice.reducer;