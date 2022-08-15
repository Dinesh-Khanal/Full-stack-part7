import Blog from "./components/Blog";
import { useSelector } from "react-redux";

const App = () => {
  const blogs = useSelector((state) => state.blogs.all_blogs)
    .slice()
    .sort((a, b) => b.likes - a.likes);
  return (
    <div>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
