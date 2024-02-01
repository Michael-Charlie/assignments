import React, { useContext, useEffect } from "react";
import Issue from "./Issue.jsx";
import IssueForm from "./IssueForm.jsx";
import IssueList from "./IssueList.jsx";
import { UserContext } from "../context/UserProvider.jsx";

export default function Profile() {
  const {
    user: { username },
    issues,
    addIssue,
    getAllComments,
    getUserIssues
  } = useContext(UserContext);

  useEffect(() => {
    getAllComments()
    getUserIssues()
  }, [])

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add An Issue</h3>
      <IssueForm addIssue={addIssue} />
      <h3>Your Issues</h3>
      <IssueList issues={issues} />
    </div>
  );
}
