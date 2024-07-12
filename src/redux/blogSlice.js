import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    blogList: []
}

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        updateBlogList: (state, action) => {
            state.blogs = action.payload
        }
    }
});

export const {
    updateBlogList
} = blogSlice.actions;

export default blogSlice.reducer;