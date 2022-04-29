import React, {useState} from 'react';
import {SiDatabricks} from 'react-icons/si';
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css';


const Navbar = () => {
const [nav, setNav] = useState(false);
const handleNav = () => setNav(!nav);

  return (
    <div name='top' className='navbar'>
      <div className='container'>
        <div className='logo'>
          <SiDatabricks className='icon' />
          {/* <img className='tootle-logo'src={require('../../assets/img/turle-head-logo.png') } /> */}
          <h1>Tootle Lingo</h1>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li>Home</li>
          <li>Languages</li>
          <li>About Us</li>
          <li>Support</li>
          <button className='sign-up-link'>Sign Up</button>
          <button className='login-link'>Login</button>
        </ul>
        <div className='hamburger' onClick={handleNav}>
          {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
          {/* <FaBars className='icon' /> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar