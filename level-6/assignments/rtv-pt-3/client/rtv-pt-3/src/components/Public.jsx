import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import IssueList from "./IssueList";
import IssueForm from "./IssueForm";

export default function Public() {
  const { getAllIssues, allIssues, addIssue } = useContext(UserContext);

  useEffect(() => {
    getAllIssues();
  }, []);
  console.log(allIssues);
  return (
    <div className="public">
      <IssueForm addIssue={addIssue} />
      <IssueList issues={allIssues} />
    </div>
  );
}
