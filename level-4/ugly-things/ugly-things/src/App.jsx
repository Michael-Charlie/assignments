import { useState, useEffect, useContext } from "react";
import "./App.css";
import Form from "./Form";
import axios from "axios";
import FormList from "./FormList";
import { ThemeContext } from "./themeContext";

function App(props) {
  const [uglyThing, setUglyThing] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });
  const {
    allUglyThings,
    postRequest,
    putRequest,
    deleteRequest,
    setAllUglyThings,
  } = useContext(ThemeContext);

  // const [allUglyThings, setAllUglyThings] = useState([]);

  const [toggleView, setToggleView] = useState(true);

  const [editThing, setEditThing] = useState(uglyThing);

  function handleChange(e) {
    const { name, value } = e.target;
    setEditThing((prevEdit) => ({
      ...prevEdit,
      [name]: value,
    }));
  }

  return (
    <div>
      <Form
        title={uglyThing.title}
        description={uglyThing.description}
        imgUrl={uglyThing.imgUrl}
        setUglyThing={setUglyThing}
        setAllUglyThings={setAllUglyThings}
        postRequest={postRequest}
        uglyThing={uglyThing}
      />
      <FormList
        allUglyThings={allUglyThings}
        deleteRequest={deleteRequest}
        toggleView={toggleView}
        setToggleView={setToggleView}
        editThing={editThing}
        setEditThing={setEditThing}
        putRequest={putRequest}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;

// const postRequest = () => {
//   let formData = new FormData();
//   formData.append("title", uglyThing.uglyTitle);
//   formData.append("description", uglyThing.uglyDescription);
//   formData.append("imgUrl", uglyThing.uglyImage);

//   fetch("https://api.vschool.io/micharlcharlie/thing", {
//     method: "POST",
//     body: formData,
//   })
//     .then((response) => response.json())
//     .catch((error) => console.log("error", error));
// };

// const [uglyThing, setUglyThing] = useState({
//   title: "",
//   description: "",
//   imgUrl: "",
// });

// const [allUglyThings, setAllUglyThings] = useState([]);

// const [toggleView, setToggleView] = useState(true);

// const [editThing, setEditThing] = useState(uglyThing);

// const getRequest = () => {
//   axios
//     .get("https://api.vschool.io/michaelcharlie/thing")
//     .then((res) => setAllUglyThings(res.data))
//     .catch((err) => console.log(err));
// };

// useEffect(() => {
//   getRequest();
// }, []);

// const postRequest = () => {
//   axios
//     .post("https://api.vschool.io/michaelcharlie/thing", uglyThing)
//     .then((res) =>
//       setAllUglyThings((prevAllUglyThings) => [
//         ...prevAllUglyThings,
//         res.data,
//       ])
//     )
//     .catch((err) => console.log(err));
// };

// const deleteRequest = (uglyId) => {
//   axios
//     .delete(`https://api.vschool.io/michaelcharlie/thing/${uglyId}`)
//     .then((response) =>
//       setAllUglyThings((prevAllUglyThings) => {
//         return prevAllUglyThings.filter((post) => post._id !== uglyId);
//       })
//     )
//     .catch((error) => console.log(error));
// };

// const putRequest = (uglyId) => {
//   axios
//     .put(`https://api.vschool.io/michaelcharlie/thing/${uglyId}`, editThing)
//     .then((response) =>
//       setAllUglyThings((prevAllUglyThings) => {
//         return prevAllUglyThings.map((post) =>
//           post._id !== uglyId ? post : response.data
//         );
//       })
//     )
//     .catch((error) => console.log(error));
// };

// function handleChange(e) {
//   const { name, value } = e.target;
//   setEditThing((prevEdit) => ({
//     ...prevEdit,
//     [name]: value,
//   }));
// }

// <div>
//   <Form
//     title={uglyThing.title}
//     description={uglyThing.description}
//     imgUrl={uglyThing.imgUrl}
//     setUglyThing={setUglyThing}
//     setAllUglyThings={setAllUglyThings}
//     postRequest={postRequest}
//   />
//   <div className="list">
//     <h1>Ugly Things List:</h1>
//     {allUglyThings.map((listItem, i) => (
//       <div key={i}>
//         <h2>{listItem.title}</h2>
//         <p>{listItem.description}</p>
//         <img className="list--image" src={listItem.imgUrl}></img>
//         <br />
//         <button onClick={() => deleteRequest(listItem._id)}>Delete</button>
//         <button
//           onClick={() => {
//             setToggleView((prev) =>
//               prev === listItem._id ? "" : listItem._id
//             );
//             setEditThing(listItem);
//           }}
//         >
//           {toggleView !== listItem._id ? "Edit" : "Cancel"}
//         </button>
//         {toggleView === listItem._id && (
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               putRequest(listItem._id);
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Title"
//               name="title"
//               value={editThing.title}
//               onChange={handleChange}
//             />
//             <input
//               type="text"
//               placeholder="Description"
//               name="description"
//               value={editThing.description}
//               onChange={handleChange}
//             />
//             <br />
//             <button>Submit Changes</button>
//           </form>
//         )}
//       </div>
//     ))}
//   </div>
// </div>;
