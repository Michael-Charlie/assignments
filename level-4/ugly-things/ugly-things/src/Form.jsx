import React, { useEffect } from "react";

function Form(props) {
  function handleChange(event) {
    const { name, value } = event.target;
    props.setUglyThing((prevUglyThing) => ({
      ...prevUglyThing,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Below is if you were to do the code locally
    // props.setAllUglyThings((prevAllUglyThings) => [
    //   ...prevAllUglyThings,
    //   {
    //     title: props.title,
    //     description: props.description,
    //     imgUrl: props.imgUrl,
    //   },
    // ]);
    // Axios request below, logic is being passsed through props from app
    props.postRequest(props.uglyThing);
  }

  // let list = props.uglyList.map(uglyArr => {
  //     return (
  //         <div></div>
  //     )
  // })

  //   console.log(props);

  return (
    <div className="form" autoComplete="off">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={props.title}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Description"
            name="description"
            value={props.description}
            onChange={handleChange}
          />

          <input
            type="url"
            placeholder="Img URL"
            name="imgUrl"
            value={props.imgUrl}
            onChange={handleChange}
          />
        </div>

        <button className="form--button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

// function Form(props) {
// function handleChange(event) {
//   const { name, value } = event.target;
//   props.setUglyThing((prevUglyThing) => ({
//     ...prevUglyThing,
//     [name]: value,
//   }));
// }

// function handleSubmit(e) {
//   e.preventDefault();
//   // Below is if you were to do the code locally
//   // props.setAllUglyThings((prevAllUglyThings) => [
//   //   ...prevAllUglyThings,
//   //   {
//   //     title: props.title,
//   //     description: props.description,
//   //     imgUrl: props.imgUrl,
//   //   },
//   // ]);
//   // Axios request below, logic is being passsed through props from app
//   props.postRequest();
// }

// <div className="form" autoComplete="off">
//   <form onSubmit={handleSubmit}>
//     <div>
//       <input
//         type="text"
//         placeholder="Title"
//         name="title"
//         value={props.title}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         placeholder="Description"
//         name="description"
//         value={props.description}
//         onChange={handleChange}
//       />

//       <input
//         type="url"
//         placeholder="Img URL"
//         name="imgUrl"
//         value={props.imgUrl}
//         onChange={handleChange}
//       />
//     </div>

//     <button className="form--button" type="submit">
//       Submit
//     </button>
//   </form>
// </div>;
