import React from "react";
import Blog from "./Blog";
import "./styles.css";
import User from "./User";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [searchUser, setSearchUser] = React.useState({});
  const [blogs, setBlogs] = React.useState([]);
  const [searchBlog, setSearchBlog] = React.useState({});
  const userUrl = "https://jsonplaceholder.typicode.com/users";
  const blogUrl = "https://jsonplaceholder.typicode.com/posts";
  React.useEffect(() => {
    requestUsers();
  }, []);
  const requestUsers = async () => {
    const res = await fetch(userUrl);
    const json = await res.json();
    setUsers(json);
  };
  React.useEffect(() => {
    requestBlogs();
  }, []);

  const requestBlogs = async () => {
    const res = await fetch(blogUrl);
    const json = await res.json();
    setBlogs(json);
  };

  const filterUsers = (event) => {
    if (searchUser)
      setUsers(users.filter((user) => user.name.includes(searchUser)));
    event.preventDefault();
  };

  const filterBlogs = (event) => {
    event.preventDefault();
    if (searchBlog)
      setBlogs(blogs.filter((blog) => blog.title.includes(searchBlog)));
  };
  return (
    <div className="App">
      <div>
        <form>
          <p>
            <h3> Authors and Blogs</h3>
            <span>Users: &nbsp;</span>
            <input
              type="text"
              name="user"
              onChange={(e) => setSearchUser(e.target.value)}
            />
            <button onClick={filterUsers}>Search Users </button>
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </p>
          <p>
            <span>Blogs: &nbsp;</span>
            <input
              type="text"
              name="blog"
              onChange={(e) => setSearchBlog(e.target.value)}
            />
            <button onClick={filterBlogs}>Search Users </button>
            {blogs.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </p>
        </form>
      </div>
    </div>
  );
}
