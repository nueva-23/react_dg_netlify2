import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`post/${post.id}`}>
        <h3>{post.title}</h3>
        <p className="postDate">{post.datetime}</p>
      </Link>
      <p className="postBody">
        {post.body.length > 20 ? `${post.body.slice(0, 20)}...` : post.body}
      </p>
    </article>
  );
};

export default Post;
