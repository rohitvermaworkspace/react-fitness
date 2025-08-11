import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../theme.scss";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            {/* <img src="/logo.png" alt="Logo" /> */}
            <h1>Fitness App</h1>
          </div>

          <nav className={showMenu ? 'mobile-menu' : 'web-menu'}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
           <div className="hamburger">
            <GiHamburgerMenu size={24} onClick={handleMenuToggle}/>
        </div>
        </div>

      </div>
    </header>
  );
}
export default Navbar;