import '../App.css'
import { GrPower} from "react-icons/gr";


const NavBar = ({user, setUser}) => {

    const handleClick= () => {
        fetch('/logout', {method:'DELETE'})
        .then((r)=>{
            if(r.ok){
                setUser(null);
            }
        })
    }
    
    return (
        <div className="navbar">
       
       <div className="out">
       <a href="/"><p className="logotext">Potatogram</p></a>
       <p className="welcomename">Welcome {user.username}!</p>
       <p onClick={handleClick}>Logout  <GrPower/></p>
      
       </div>
        </div>
    )
}

export default NavBar