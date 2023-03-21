import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const PostPage = () => {
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);

  const { id } = useParams();
  const post = getPostById(id);
  // const post = posts.find((post) => post.id.toString() === id);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    deletePost(id);
    navigate("/");
  };

  return (
    <main>
      <article className="PostPage">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Page Not Found</h2>
            <p>please check the url</p>
            <Link to="/">go back go home</Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
