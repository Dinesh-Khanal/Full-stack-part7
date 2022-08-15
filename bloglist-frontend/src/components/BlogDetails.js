import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBlog } from "../redux/blog-action";
import { useState } from "react";

const BlogDetails = () => {
  const [comment, setComment] = useState("");
  const blogs = useSelector((state) => state.blogs.all_blogs);
  const id = useParams().id;
  const blog = blogs.find((b) => b.id === id);
  const dispatch = useDispatch();

  const handleUpdate = (blog) => {
    let newBlog = { ...blog, likes: blog.likes + 1 };
    dispatch(updateBlog(newBlog));
  };
  const addComment = (e) => {
    e.preventDefault();
    let comments = [...blog.comments, comment];
    let newBlog = { ...blog, comments };
    dispatch(updateBlog(newBlog));
    setComment("");
  };
  if (blogs.length === 0) {
    return null;
  }
  return (
    <>
      <h1>{blog.title}</h1>
      <p>
        <a href={blog.url}>{blog.url}</a>
        <br />
        {blog.likes} Likes
        <button onClick={() => handleUpdate(blog)}>like</button>
        <br />
        Added by {blog.user.name}
      </p>
      <h2>Comments</h2>
      <form onSubmit={addComment}>
        <input
          type="text"
          placeholder="haven't read this yet ..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">add comment</button>
      </form>
      <ul>
        {blog.comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </>
  );
};
export default BlogDetails;
