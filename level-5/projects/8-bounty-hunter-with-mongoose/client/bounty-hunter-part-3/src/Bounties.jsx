import React, {useState} from "react";
import AddBountyForm from "./AddBountyForm";

export default function Bounties(props){
    const {firstName, lastName, type, bounty, _id, deleteBounty, editBounty} = props
    const [editToggle, setEditToggle] = useState(false)
    function toggleEdit(){
      setEditToggle(!editToggle)
    }
    return (
      <div>
        {!editToggle ? (
          <>
            <h1>
              {firstName} {lastName}
            </h1>
            <p>Type: {type}</p>
            <p>Bounty: {bounty} Galleons</p>
            <button onClick={() => deleteBounty(_id)}>Delete</button>
            <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
              Edit
            </button>
          </>
        ) : (
          <>
            <AddBountyForm
              firstName={firstName}
              lastName={lastName}
              type={type}
              _id={_id}
              bounty={bounty}
              btnText="Submit Edit"
              submit={editBounty}
              toggleEdit={toggleEdit}
            />
            <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
              Close
            </button>
          </>
        )}
      </div>
    );
}