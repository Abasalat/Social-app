import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (curPostList, action) => {
  let newPostList = curPostList;
  if (action.type === "Delete_Post") {
    newPostList = curPostList.filter((post) => post.id !== action.payload.id);
  } else if (action.type == "Add_Post") {
    newPostList = [action.payload, ...curPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatch({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (id) => {
    console.log("clicked");
    let deletePostAction = {
      type: "Delete_Post",
      payload: {
        id,
      },
    };
    dispatch(deletePostAction);
  };

  return (
    <PostListData.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListData.Provider>
  );
};

export default PostListProvider;
