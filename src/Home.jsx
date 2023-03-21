import React from "react";
import Feed from "./Feed";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
// import { useContext } from "react";
// import DataContext from "./context/DataContext";

const Home = () => {
  // const { posts, setPosts, search } = useContext(DataContext);
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const [searchResults, setSearchResults] = useState([]);
  const { data, isLoading, fetchError } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filtered);
  }, [posts, search]);

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <main className="Home">
      {isLoading && <p>is Loading...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          "No post exist"
        ))}
    </main>
  );
};

export default Home;
