import React, { useState, useEffect } from "react";
import { DataContext } from "./DataContext";

const DataContextProvider = (props) => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);



  const getUsers = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()).then(data => setUser(data));
  }

  const getPosts = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()).then(data => setPosts(data));
  }

  const getComments = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json()).then(data => setComments(data));
  }

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);


  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()))
    );
    
}, [search, posts]);


const context = {
    user,
    posts,
    comments,
    getComments,
    search,
    setSearch,
    filteredPosts,
};

  return (
    <DataContext.Provider value={context}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;