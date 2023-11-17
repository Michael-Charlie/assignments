import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Bounties from './Bounties'
import AddBountyForm from './AddBountyForm'

function App() {
  const [bounties, setBounties] = useState([])
  function getBounties() {
    axios.get("/api/bounty")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post("/api/bounty", newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/api/bounty/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId) {
    axios.put(`/api/bounty/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getBounties()
  }, [])
  return (
<div>
  <AddBountyForm
    submit={addBounty}
    btnText="Add Bounty"
  />
    {bounties.map(bounty => 
    <Bounties 
    {...bounty} 
    key={bounty.firstName}
    deleteBounty={deleteBounty}
    editBounty={editBounty}
    />)}
</div>
  )
}

export default App
