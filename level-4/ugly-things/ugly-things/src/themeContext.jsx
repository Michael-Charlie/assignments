import React, { useState, useEffect } from "react";
import axios from "axios";

export const ThemeContext = React.createContext();

export default function ThemeContextProvider(props) {
  const [allUglyThings, setAllUglyThings] = useState([]);

  const getRequest = () => {
    axios
      .get("https://api.vschool.io/michaelcharlie/thing")
      .then((res) => setAllUglyThings(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRequest();
  }, []);

  const postRequest = (uglyThing) => {
    axios
      .post("https://api.vschool.io/michaelcharlie/thing", uglyThing)
      .then((res) =>
        setAllUglyThings((prevAllUglyThings) => [
          ...prevAllUglyThings,
          res.data,
        ])
      )
      .catch((err) => console.log(err));
  };

  const deleteRequest = (uglyId) => {
    axios
      .delete(`https://api.vschool.io/michaelcharlie/thing/${uglyId}`)
      .then((response) =>
        setAllUglyThings((prevAllUglyThings) => {
          return prevAllUglyThings.filter((post) => post._id !== uglyId);
        })
      )
      .catch((error) => console.log(error));
  };

  const putRequest = (uglyId, editThing) => {
    axios
      .put(`https://api.vschool.io/michaelcharlie/thing/${uglyId}`, editThing)
      .then((response) =>
        setAllUglyThings((prevAllUglyThings) => {
          return prevAllUglyThings.map((post) =>
            post._id !== uglyId ? post : response.data
          );
        })
      )
      .catch((error) => console.log(error));
  };

  return (
    <ThemeContext.Provider
      value={{
        allUglyThings,
        putRequest,
        deleteRequest,
        postRequest,
        setAllUglyThings,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
