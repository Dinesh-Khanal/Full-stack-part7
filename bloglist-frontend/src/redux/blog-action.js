import blogSlice from "./blog-slice";
import blogService from "../services/blogs";

const todoActions = blogSlice.actions;

export const fetchBlogs = () => {
  return async (dispatch) => {
    const response = await blogService.getAll();
    dispatch(todoActions.fetchBlog(response));
  };
};

export const createBlog = (newBlog, token) => {
  return async (dispatch) => {
    const response = await blogService.create(newBlog, token);
    dispatch(todoActions.addBlog(response));
  };
};

export const deleteBlog = (blogId, token) => {
  return async (dispatch) => {
    const response = await blogService.remove(blogId, token);
    dispatch(todoActions.removeBlog(response));
  };
};
export const updateBlog = (blog) => {
  return async (dispatch) => {
    const response = await blogService.update(blog);
    dispatch(todoActions.blogUpdate(response));
  };
};
