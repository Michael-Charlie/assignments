import './App.css'
import Friend from './components/Friend'
import FriendList from './components/FriendList'
import Pet from './components/Pet'
import friendsData from './friendsData'

function App() {
  const friends = friendsData.map((friend, index) => {
    return (
      <FriendList
      key={index}
      {...friend}
      />
    )
  })

  return (
    <div>
      <section>
        {friends}
      </section>
      {/*<Friend />
      <Pet />*/}


    </div>
  )
}

export default App
