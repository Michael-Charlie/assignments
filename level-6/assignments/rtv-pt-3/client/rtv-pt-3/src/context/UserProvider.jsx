import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    issues: [],
    errMsg: ""
  };

  const [userState, setUserState] = useState(initState);

  const [allComments, setAllComments] = useState([])

  const [allIssues, setAllIssues] = useState([])

  function signup(credentials) {
    axios
      .post("/auth/signup", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        getUserComments();
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: "",
      comments: [],
    });
  }

  function handleAuthErr(errMsg){
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthErr(){
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  function getAllIssues() {
    userAxios
      .get("/api/issue")
      .then((res) => setAllIssues(res.data))
      .catch((err) => console.log(err));
  }

  function getUserIssues() {
    userAxios
      .get("api/issue/user")
      .then((res) => {
        setUserState((prevUserState) => ({
          ...prevUserState,
          issues: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function addIssue(newIssue) {
    userAxios
      .post("/api/issue", newIssue)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          issues: [...prevState.issues, res.data],
        }));
        setAllIssues(prevIssues => [...prevIssues, res.data])
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function getAllComments(){
    userAxios.get("/api/comment")
      .then(res => setAllComments(res.data))
      .catch(err => console.log(err))
  }

  function addComment(input, issueId){
    userAxios.post(`/api/comment/${issueId}`, input)
    .then(res => setAllComments(prevComments => [...prevComments, res.data]))
    .catch(err => console.log(err))
  }

  function upVoteIssue(issueId) {
    userAxios
      .put(`/api/issue/upVote/${issueId}`)
      .then((res) => {
        setAllIssues((prevIssues) =>
          prevIssues.map((issue) => (issueId !== issue._id ? issue : res.data))
        );
        setUserState((prevUserState) => ({
          ...prevUserState,
          issues: prevUserState.issues.map((issue) =>
            issueId !== issue._id ? issue : res.data
          ),
        }));
      })
      .catch((err) => console.log(err));
  }

  function downVoteIssue(issueId) {
    userAxios
      .put(`/api/issue/downVote/${issueId}`)
      .then((res) => {
        setAllIssues((prevIssues) =>
          prevIssues.map((issue) => (issueId !== issue._id ? issue : res.data))
        );
        setUserState((prevUserState) => ({
          ...prevUserState,
          issues: prevUserState.issues.map((issue) =>
            issueId !== issue._id ? issue : res.data
          ),
        }));
      })
      .catch((err) => console.log(err));
  }




  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        resetAuthErr,
        getAllComments,
        getUserIssues,
        addComment,
        allComments,
        upVoteIssue,
        downVoteIssue,
        getAllIssues,
        allIssues
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

// import React, { useState } from "react";
// import axios from "axios";

// export const UserContext = React.createContext();

// export default function UserProvider(props) {
//   const initState = {
//     user: {},
//     token: "",
//     issues: [],
//   };

//   const [userState, setUserState] = useState(initState);

//   function signup(credentials) {
//     axios
//       .post("/auth/signup", credentials)
//       .then(console.log(res))
//       .catch((err) => console.log(err));
//   }

//   return (
//     <UserContext.Provider
//       value={{
//         ...userState,
//         signup,
//       }}
//     >
//       {props.children}
//     </UserContext.Provider>
//   );
// }
