import React, { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.length === 0 && <Welcome />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
