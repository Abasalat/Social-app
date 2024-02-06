import React, { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <Welcome onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
