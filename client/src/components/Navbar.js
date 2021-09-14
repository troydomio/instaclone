import '../App.css'


const NavBar = ({user}) => {

    const handleClick= () => {
        console.log('hi')
    }
    
    return (
        <div className="navbar">
       <a href="/"><p className="logotext">Potatogram</p></a>
       <p>Welcome {user.username}!</p>
       <button 
       className="logoutbutton"
       onClick={handleClick}
       >
        Log Out</button>
       
        </div>
    )
}

export default NavBar