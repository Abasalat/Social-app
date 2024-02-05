import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete"
        onClick={() => deletePost(post.id)}
      >
        <MdDelete style={{ width: "1rem", height: "1.5rem" }} />
      </span>

      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge rounded-pill text-bg-primary tag-space"
          >
            {tag}
          </span>
        ))}
        <div className="alert alert-info reaction" role="alert">
          This post is reacted by {post.reaction} people
        </div>
      </div>
    </div>
  );
};

export default Post;
