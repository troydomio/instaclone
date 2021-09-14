import '../App.css'
import { useState } from "react";
import Login from './Login';
import Signup from './Signup'

// const LandingPage = () => {
const LandingPage = ({ onLogin }) => {

  const [activeForm, setActiveForm] = useState("signup");
 


//   const onSignup = (e) => {
//     e.preventDefault();
//     console.log("you have signed up")
// }

    return (
        <div className="login">
        {activeForm === "login"? <Signup onLogin={onLogin}/> : <Login onLogin={onLogin}/> }
         <p onClick={()=>setActiveForm("login")}>Dont have an account? Sign up</p> 
         <p onClick={()=>setActiveForm("")}>Have an account? Login</p>  
        </div>
    )
}

export default LandingPage
