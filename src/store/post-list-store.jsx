import {
  createContext,
  useCallback,
  useReducer,
  useState,
  useEffect,
} from "react";

export const PostListData = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (curPostList, action) => {
  let newPostList = curPostList;
  if (action.type === "Delete_Post") {
    newPostList = curPostList.filter((post) => post.id !== action.payload.id);
  } else if (action.type == "Add_Post") {
    newPostList = [action.payload, ...curPostList];
  } else if (action.type == "Add_Initial_Post") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatch({
      type: "Add_Post",
      payload: post,
    });
  };

  const addInitialPost = (posts) => {
    dispatch({
      type: "Add_Initial_Post",
      payload: {
        posts,
      },
    });
  };
  const deletePost = useCallback(
    (id) => {
      dispatch({
        type: "Delete_Post",
        payload: {
          id,
        },
      });
    },
    [dispatch]
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListData.Provider value={{ postList, addPost, fetching, deletePost }}>
      {children}
    </PostListData.Provider>
  );
};

export default PostListProvider;
