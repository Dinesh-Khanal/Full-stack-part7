//import Toggalable from "./Toggalable";
import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
  const blogStyle = {
    border: "1px solid",
    padding: "5px",
  };
  return (
    <div style={blogStyle}>
      <Link to={`blogs/${blog.id}`}>
        {blog.title} {blog.author}
      </Link>

      {/* <Toggalable btn1="hide" btn2="view">
        <p>{blog.url}</p>
        <p>
          Likes {blog.likes}{" "}
          <button onClick={() => handleUpdate(blog)}>like</button>
        </p>
        <p>{blog.author}</p>
        <button onClick={() => handleDelete(blog)}>remove</button>
      </Toggalable> */}
    </div>
  );
};
export default Blog;
