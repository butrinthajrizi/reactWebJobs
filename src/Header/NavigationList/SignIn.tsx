
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Buttons/Buton";
import { Footer } from "../../Components/Footer/Footer";
import './SignIn.css'

export type User ={
    id: number
    name: string
    username: string
    password: string
}

type Props = {
 
  signIn: (user: User)=> void
}

export function SignIn ({signIn}: Props) {

  let navigate = useNavigate()

  function handleSubmit (event: any) {
    event.preventDefault()
    let username = event.target.username.value 
    let password = event.target.password.value

    fetch(`http://localhost:4000/users/${username}`)
    .then(r => r.json())
    .then((user: User) => {
     if (user.password === password)  {
      signIn(user)
      navigate("/employers");

     } else {
       alert("Check your username/password please!")

     }
    })

  }


    return (
     
    <div className="signIn-form">
     
      <form  onSubmit={handleSubmit}>
      <h1 className="signIn-form-header">Welcome to HR SOLUTIONS</h1>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="button-container">
        
         <Button 
         variant="logIn" >Log In</Button>
     
        </div>
      </form>
      
      </div>
     
    
    )
    
}