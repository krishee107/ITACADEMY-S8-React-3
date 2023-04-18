import { Link } from "react-router-dom"
import './Navbar.css'
import Logo from '../../assets/logo.jpg'
const Navbar = () => {
  return (
    <nav>
      <div className="header">
        <div> </div>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="userOptions">
          <Link to="/login">LOG IN</Link>
          <span>//</span>
          <Link to="/registro">SIGN UP</Link>
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