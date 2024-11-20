import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom";
import Events from "./pages/Events";
import Friends from "./pages/Friends";
import Items from "./pages/Items";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Start from "./pages/Start";
import Eventdetails from "./pages/Eventdetails";
import Newitem from "./pages/Newitem";
import NewEvent from "./pages/NewEvent";



function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/events/eventdetails" element={<Eventdetails/>}></Route>
        <Route path="/friends" element={<Friends/>}></Route>
        <Route path="/items" element={<Items/>}></Route>
        <Route path="/items/newitem" element={<Newitem/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/events/newevent" element={<NewEvent/>}></Route>
        <Route path="/" element={<Start/>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
