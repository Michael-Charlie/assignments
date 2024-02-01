import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";

function Vote(props) {
    const {upVoteIssue, downVoteIssue} = useContext(UserContext)
    const {likedUsers, dislikedUsers, issueId} = props

    return (
      <div>
        <div>
          <p>{likedUsers.length}</p>
          <button onClick={() => upVoteIssue(issueId)}>Like</button>
        </div>

        <div>
          <p>{dislikedUsers.length}</p>
          <button onClick={() => downVoteIssue(issueId)} >Dislike</button>
        </div>
      </div>
    );
}

export default Vote;