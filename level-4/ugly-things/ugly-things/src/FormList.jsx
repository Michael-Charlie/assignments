import React from "react";

function FormList(props) {
  const {
    allUglyThings,
    deleteRequest,
    toggleView,
    setToggleView,
    editThing,
    setEditThing,
    putRequest,
    handleChange,
  } = props;

  return (
    <div>
      <div className="list">
        <h1>Ugly Things List:</h1>
        {allUglyThings.map((listItem, i) => (
          <div key={i}>
            <h2>{listItem.title}</h2>
            <p>{listItem.description}</p>
            <img className="list--image" src={listItem.imgUrl}></img>
            <br />
            <button onClick={() => deleteRequest(listItem._id)}>Delete</button>
            <button
              onClick={() => {
                setToggleView((prev) =>
                  prev === listItem._id ? "" : listItem._id
                );
                setEditThing(listItem);
              }}
            >
              {toggleView !== listItem._id ? "Edit" : "Cancel"}
            </button>
            {toggleView === listItem._id && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  putRequest(listItem._id, editThing);
                }}
              >
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={editThing.title}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={editThing.description}
                  onChange={handleChange}
                />
                <br />
                <button>Submit Changes</button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormList;
