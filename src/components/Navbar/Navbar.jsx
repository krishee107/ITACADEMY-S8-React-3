import { Link } from "react-router-dom"
import './Navbar.css'
import Logo from '../../assets/logo.jpg'
import { useEffect, useState } from 'react';


const Navbar = () => {
  const [isAuth, setisAuth] = useState(() => {
    const storedAuth = localStorage.getItem("isAuth");
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  const login = () => {
    setisAuth(true)
    alert("LANZADO")
  }
  const logout = () => {
    setisAuth(false)
  }
  useEffect(() => {
    localStorage.setItem("isAuth", isAuth)
  }, [isAuth])

  return (
    <nav>
      <div className="header">
        <div> </div>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="userOptions">
          {isAuth ?
            <div className="logout" onClick={logout}>LOG OUT</div>
            :
            <div className="login" onClick={login}>LOG IN // SIGN UP</div>
          }
        </div>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/starships">Starships</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar