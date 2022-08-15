import Blogform from "./Blogform";
import Loginform from "./Loginform";
import Toggalable from "./Toggalable";
import Notification from "./Notification";
import { setMessage } from "../redux/messageSlice";
import { loginUser, getUsers } from "../redux/user-action";
import { userLogin, userLogout } from "../redux/user-slice";
import { fetchBlogs, createBlog } from "../redux/blog-action";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Mymenu = styled.div`
  width: 100%;
  color: white;
  background-image: linear-gradient(#404040, #808080, #404040);
  padding: 10px;
  display: inline-block;
  a {
    text-decoration: none;
    color: white;
    padding: 5px;
    margin: 5px 10px;
  }
  a:hover,
  button:hover {
    border: 1px solid #909090;
    border-radius: 5px;
  }
  button {
    margin-left: 5px;
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    padding: 5px;
  }
`;

const Menu = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let user = useSelector((state) => state.users.userdata);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const blogFormRef = useRef();

  let msg = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(fetchBlogs());
    dispatch(getUsers());
  }, []);
  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser) {
      dispatch(userLogin(JSON.parse(loggedUser)));
    }
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      author,
      url,
    };
    const token = user.token;
    blogFormRef.current.visibleToggle();
    dispatch(createBlog(newBlog, token));
    setTitle("");
    setAuthor("");
    setUrl("");
    dispatch(
      setMessage({
        type: "notification",
        message: `A new blog ${newBlog.title} by ${newBlog.author} added.`,
      })
    );
    window.setTimeout(() => dispatch(setMessage(null)), 2000);
  };
  const handleLogin = async (e, username, password) => {
    e.preventDefault();
    try {
      dispatch(loginUser(username, password));
      setUsername("");
      setPassword("");
    } catch (error) {
      dispatch(setMessage({ type: "error", message: error.message }));
      window.setTimeout(() => dispatch(setMessage(null)), 2000);
      console.log(error);
    }
  };
  const handleLogout = () => {
    dispatch(userLogout());
    dispatch(
      setMessage({ type: "notification", message: "logout successfully" })
    );
    window.setTimeout(() => dispatch(setMessage(null)), 2000);
    window.localStorage.removeItem("loggedUser");
  };
  return (
    <>
      <p>{!user ? "Login to application" : ""}</p>
      {msg !== null && <Notification />}
      {!user ? (
        <Loginform
          handleLogin={handleLogin}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <>
          <Mymenu>
            <Link to="/">Blogs</Link>
            <Link to="/user">Users</Link>
            <label>{user.name} logged in</label>
            <button onClick={handleLogout}>logout</button>
          </Mymenu>
          <h2>Blog app</h2>
          <Toggalable ref={blogFormRef} btn1="cancle" btn2="create new blog">
            <Blogform
              handleCreate={handleCreate}
              title={title}
              author={author}
              url={url}
              setTitle={setTitle}
              setAuthor={setAuthor}
              setUrl={setUrl}
            />
          </Toggalable>
        </>
      )}
    </>
  );
};

export default Menu;
