import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all_blogs: [],
};
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchBlog(state, action) {
      state.all_blogs = action.payload;
    },
    addBlog(state, action) {
      state.all_blogs.push(action.payload);
    },
    removeBlog(state, action) {
      const index = state.all_blogs.indexOf(action.payload);
      state.all_blogs.splice(index, 1);
    },
    blogUpdate(state, action) {
      const index = state.all_blogs.findIndex(
        (b) => (b.id = action.payload.id)
      );
      state.all_blogs[index] = action.payload;
    },
  },
});

export const { fetchBlog } = blogSlice.actions;
export default blogSlice;
