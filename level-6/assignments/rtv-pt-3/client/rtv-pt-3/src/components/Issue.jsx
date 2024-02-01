import React, {useContext} from "react";
import { UserContext } from "../context/UserProvider";
import Comment from "./Comment"
import Vote from "./Vote";
import moment from "moment";

export default function Issue(props) {
  const { user } = useContext(UserContext)

  const { title, description, datePosted, userId, _id, likedUsers, dislikedUsers } = props;
  
  const timestamp = moment(datePosted).fromNow()
  
  return (
    <>
      <div className="comment">
        <h1>User: {userId.username}</h1>
        <h2>Title: {title}</h2>
        <h3>Description: {description}</h3>
        <div>Date posted: {timestamp}</div>
        {userId._id === user._id && <button>Delete</button>}
      </div>
      <Vote
        likedUsers={likedUsers}
        dislikedUsers={dislikedUsers}
        issueId={_id}
      />
      <Comment issueId={_id} />
    </>
    // Render comment form here
  );
}
