import logo from '../logo.svg';
import '../App.css';
import Login from './Login';
import NavBar from './Navbar';
import Main from './ImageContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Login/> */}
      <Main/>
    </div>
  );
}

export default App;
