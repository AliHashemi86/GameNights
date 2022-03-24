import React from "react";
import { Outlet, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import "./App.css";

function App() {
  const [cookies, setCookies, removeCookie] = useCookies(['user']);
  console.log(cookies);

  const logout = function() {
    removeCookie('user');
    window.location.href = '/';
  }

  return (
    <div className="App" >


      <nav className="navbar"
        style={{
          // display: "flex",
          // alignItems: "center",
          borderBottom: "solid 5px",
          fontSize: "1.3em",
          fontWeight: "bold",
          justifyContent: "flex-start"
        }}
        >
        <img id="logo" style={{justifyContent: "flex-start"}}src="image/Game-night-logo.png" alt=""/>
       
         {cookies.user ? 
        <>
        <Link to="/appointments" style={{ textDecoration: 'none', margin: '15px'}} >Appointments</Link>
        {/* <Link to="/users" style={{ textDecoration: 'none', margin: '15px'}}>Users</Link> */}
        {/* <Link to="/rooms" style={{ textDecoration: 'none', margin: '15px 25px'}}>Rooms</Link> */}
        <Link to="/host" style={{ textDecoration: 'none', margin: '15px'}}>Host</Link>
        <button className= "logout" style={{ textDecoration: 'none', margin: '15px 1.2em'}}type="submit" onClick={logout}>Logout</button>
        </> :
        <>
        <Link to="/login" style={{ textDecoration: 'none', margin: '15px'}}>Login</Link>
        <Link to="/register" style={{ textDecoration: 'none', margin: '15px'}}>Register</Link>
        </>
        }
      </nav>

      <Outlet />

    </div>
  );
}

export default App;
