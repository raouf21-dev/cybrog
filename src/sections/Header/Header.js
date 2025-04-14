import './header.css';
import logo from '../../assets/images/logo.png';
import NavItem, {NavItemDropDown} from '../../components/NavItem/NavItem';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt=''/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem>
                        <Link to="/" className="nav-link">Home</Link>
                    </NavItem>
                    <NavItem>
                    <Link to="#features" className="nav-link">Browse</Link>
                    </NavItem>
                    <NavItemDropDown>
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="#learn" className="dropdown-item">Fortnite</Link></li>
                            <li><Link to="#next" className="dropdown-item">Where to go next</Link></li>
                        </ul>
                    </NavItemDropDown>
                    <NavItem>
                        <li className="nav-item"><Link to="#faq" className="nav-link">Streames</Link></li>
                    </NavItem>
                    <NavItem>
                        <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                    </NavItem>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;