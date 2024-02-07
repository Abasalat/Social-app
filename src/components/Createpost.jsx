import React, { useContext, useRef } from "react";
import { PostListData } from "../store/post-list-store";

const Createpost = () => {
  const { addPost } = useContext(PostListData);

  const userIdElement = useRef("");
  const titleElement = useRef("");
  const bodyElement = useRef("");
  const tagElement = useRef("");
  const reactionElement = useRef("");

  function handleSubmission(event) {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = titleElement.current.value;
    const postBody = bodyElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
  }

  return (
    <form className="create-post" onSubmit={(event) => handleSubmission(event)}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter user id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={titleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today!!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={bodyElement}
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell use more about it."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="post-reactions" className="form-label">
          Number of reactions
        </label>
        <input
          ref={reactionElement}
          type="text"
          className="form-control"
          id="post-reactions"
          placeholder="How many people reacted to your post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="post-tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          ref={tagElement}
          type="text"
          className="form-control"
          id="post-tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Createpost;
