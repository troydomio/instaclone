import '../App.css'
import { useState } from "react";


const Signup= () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);

  const handleSubmit= (e) => {
    e.preventDefault();
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username: username,
       password: password
    }),
    })
    .then((r) => r.json())
    .then((newsignup) => console.log(newsignup));
    // axios.post("http://localhost:3000/signup",{
    //   username, 
    //   password
    // }, {withCredentials: true}
    // ).then(r => console.log('registration res', r)).catch(error => {console.log("registration error", error)})
  }

    return (
        
           <div className="login">
             signup
          <form onSubmit={handleSubmit}>
            <input className="login" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <input className="login" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/> 
            {/* <input className="login" type="submit" value="Login"/> */}
            <input className="login" type="submit" value="Sign Up"/>
          </form>
      
        </div>
       
    )
}

export default Signup
