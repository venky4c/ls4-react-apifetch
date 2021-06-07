import React from "react";
import Blog from "./Blog";
import "./styles.css";
import User from "./User";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [searchUser, setSearchUser] = React.useState("");
  const [blogs, setBlogs] = React.useState([]);
  const userUrl = "https://jsonplaceholder.typicode.com/users";
  const blogUrl = "https://jsonplaceholder.typicode.com/posts";
  React.useEffect(() => {
    fetch(userUrl)
      .then((response) => response.json())
      .then((res) => setUsers(res));
  }, []);

  React.useEffect(() => {
    fetch(blogUrl)
      .then((response) => response.json())
      .then((res) => setBlogs(res));
  }, []);

  const handleChange = (e) => {
    setSearchUser(e.target.value);
  };
  const handleClick = (searchUser) => {
    console.log(searchUser);
    const searchTerm = users.filter((user) => user.name.includes(searchUser));
    console.log("searching for .", searchTerm);
    setUsers(searchTerm);
  };

  return (
    <div className="App">
      <div>
        <p>
          <span>User: &nbsp;</span>
          <input type="text" name="user" onChange={handleChange} />
          <button onClick={handleClick}>Search </button>
          <label>You Searched FOR: {searchUser}</label>
        </p>
        <h3> Authors and Blogs</h3>
      </div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
