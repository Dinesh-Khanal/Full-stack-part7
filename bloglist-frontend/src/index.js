import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import Blog from "./components/BlogDetails";
import Menu from "./components/Menu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <div className="container">
        <Menu />
        <Routes>
          <Route path="/user/:id" element={<User />} />
          <Route path="/user" element={<Users />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/" element={<App />} />
        </Routes>
        <div className="footer">
          Blog App, Department of Computer Science, 2022
        </div>
      </div>
    </Router>
  </Provider>
);
