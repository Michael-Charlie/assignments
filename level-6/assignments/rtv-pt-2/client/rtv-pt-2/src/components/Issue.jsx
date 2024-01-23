import React from "react";

export default function Issue(props) {
  const { title, description, datePosted, user } = props;
  return (
    <div className="comment">
      <h1>User: {user}</h1>
      <h2>Title: {title}</h2>
      <h3>Description: {description}</h3>
      <div>Date posted: {datePosted}</div>
    </div>
  );
}
