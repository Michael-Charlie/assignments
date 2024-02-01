// imrs + e for useEffect | ffc for function

import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import SingleComment from "./SingleComment";

function Comment(props) {
  const { addComment, allComments } = useContext(UserContext);
  const [input, setInput] = useState({ text: "" });
  const { issueId } = props

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target);
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addComment(input, issueId)
  }

  const filteredComments = allComments.filter(comment => comment.issue === issueId)
  console.log(filteredComments)

  const commentList = filteredComments.map(comment => {
    return(
        <SingleComment
        {...comment}
        key={comment._id}
        />
    )
  })


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="text"
          value={input.text}
          type="text"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      {commentList}
    </div>
  );
}

export default Comment;
