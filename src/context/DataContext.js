import React from "react";

const Values = {
    user: [],
    posts: [],
    comments: [],
    getComments: () => {},
    setSearch: () => {},
    search: '',
    filteredPosts: []
  };

export const DataContext = React.createContext(Values);