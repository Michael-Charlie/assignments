import { useState } from 'react'
import './App.css'



function App() {
const innit = {firstName: "", lastName: "", email: "", placeOfBirth: "", phone: "", favFood: "", tellUsAboutYourself: ""}

const [formData, setFormData] = useState(innit)

const [nameBadge, setNameBadge] = useState([])

const [check, setCheck] = useState(true)

const validate = () => {
  let isDisabled = false 
  for (let prop in formData){
    if (formData[prop].length <= 3){
      isDisabled = true
    }
  } 
  console.log('isDisabled', isDisabled)
  setCheck(isDisabled)
}

function handleChange(event) {
  const {name, value} = event.target
  setFormData(prevNameBadge => ({
    ...prevNameBadge,
    [name]: value
}))
  validate()
}

function separateNumbers(phone) {
  let arr = []
  arr.push('(')
  for (var i = 0; i < phone.length; i++){
    if (i === 6){
      arr.push('-')
    }
    if (i < 3) {
      arr.push(phone[i])
    } else
    if (arr.length === 4){
      arr.push(')')
      arr.push(phone[i])
    } else 
    if (2 > i < 6){
      arr.push(phone[i])
    }  
     else {
      arr.push(phone[i])
    }
  }
  console.log('separateNumbers', arr, arr.join(''))
  return arr.join('')
}

function handleSubmit(e) {
  e.preventDefault()
  setNameBadge(prevNameBadge => [...prevNameBadge, formData])
  setFormData(innit)
}
console.log(nameBadge)
const printBadge = nameBadge.map(badge => {
  return (
    <div className="card">
        <div className="badge-container">
          <h3 className="card-name">Name: {badge.firstName} {badge.lastName}</h3> 
          
          <h3 className="card-email">Email: {badge.email}</h3>
          
          <h3 className="card-pob">Place of birth: {badge.placeOfBirth}</h3>
          
          <h3 className="card-phone">Phone: {separateNumbers(badge.phone)}</h3><br />
          
          <h3 className="card-food">Favorite food: {badge.favFood}</h3>
        </div>
        <div className="tell-us">
          <h3>{badge.tellUsAboutYourself}</h3>
        </div>
    </div>
  )
})

  return (
    <div>

      <form onSubmit={handleSubmit} className="form">

        <div className="form-container">
          <input required
            type="text" 
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            minLength={3}
          />
          
          <input required
            type="text" 
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            minLength={3}
          />

          <input required
            type="email" 
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            minLength={3}
          />

          <input required
            type="text" 
            placeholder="Place of Birth"
            name="placeOfBirth"
            onChange={handleChange}
            value={formData.placeOfBirth}
            minLength={3}
          />

          <input required
            type="tel"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            minLength={3}
          />

          <input required
            type="text" 
            placeholder="Favorite Food"
            name="favFood"
            onChange={handleChange}
            value={formData.favFood}
            minLength={3}
          />
        </div>

        <textarea required
          placeholder="Tell us about yourself"
          name="tellUsAboutYourself"
          onChange={handleChange}
          value={formData.tellUsAboutYourself}
          minLength={3}
          className="tell-us-about-yourself"
        />

      <div className="get-name-tag">
        <button disabled={check}>Get Name Tag</button>
      </div>
      </form>

        <div className="printed-badge">
          <h3 className="badge-logo">Badge:</h3>
          <br />
          <ul>
            {printBadge}
          </ul>
        </div>

    </div>
  )
}

export default App

// Phone number printing https://stackoverflow.com/questions/55988065/react-how-to-format-phone-number-as-user-types

// Add minimum character count 3 for each field https://stackoverflow.com/questions/54624406/is-there-a-way-to-set-the-minimum-length-of-a-textinput-in-react-native

// If any input fields are empty, should not be able to submit https://stackoverflow.com/questions/55088199/prevent-an-empty-submission-in-react || https://medium.com/programming-essentials/how-to-conditionally-disable-the-submit-button-in-a-function-component-2d77331d5d50

// Validation code to make sure phone number only has numbers https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript