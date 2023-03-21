import React from "react";
import { createContext, useState } from "react";

const DataContext = createContext({});

export default DataContext;

export const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        search,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
