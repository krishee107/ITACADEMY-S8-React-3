import { Link } from "react-router-dom"
import './Navbar.css'
import Logo from '../../assets/logo.jpg'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/starships">Starships</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar