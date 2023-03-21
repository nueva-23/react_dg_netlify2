import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import format from "date-fns/format";
import { useStoreState, useStoreActions } from "easy-peasy";

const EditPost = () => {
  const { id } = useParams();

  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);
  const putPost = useStoreActions((actions) => actions.putPost);
  const getPostById = useStoreState((state) => state.getPostById);

  const navigate = useNavigate();

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const editedPost = { id, title: editTitle, datetime, body: editBody };
    putPost(editedPost);
    navigate("/");
  };

  const post = getPostById(id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="NewPost">
      <h2>Edit Post</h2>
      <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle">Title: </label>
        <input
          id="postTitle"
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="postBody">Content: </label>
        <textarea
          id="postBody"
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        />
        <button type="button" onClick={() => handleEdit(id)}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default EditPost;
