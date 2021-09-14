import '../App.css'
import { useState } from "react";


const Login = ({onLogin}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit= (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username: username,
       password: password
    }),
    })
    .then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return (
        
           <div className="login">
             login
          <form onSubmit={handleSubmit}>
            <input 
            className="login"
             type="text" 
             placeholder="username" 
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             />
            <input 
            className="login" 
            type="password" 
            placeholder="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            /> 
            <input 
            className="login" 
            type="submit" 
            value="Log In"
            />
          </form>
      
        </div>
       
    )
}

export default Login
