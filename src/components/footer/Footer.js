import React from 'react'
import { SiDatabricks } from 'react-icons/si';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import './FooterStyles.css'
import { FiInstagram, FiFacebook, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

const footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='top'>
          <div className='logo-footer'>
            <SiDatabricks className='icon' />
            <h2>Tootle Lingo</h2>
          </div>
        <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
          <BsFillArrowUpCircleFill className='icon' />
        </Link>
        </div>
        <div className='col-container'>
          <div className='col'>
            <h3>About</h3>
            <p>About Us</p>
            <p>Pricing</p>
            <p>Support</p>
          </div>
          <div className='col'>
            <h3>Learn</h3>
            <p>Spanish</p>
            <p>Mandarin Chinese</p>
            <p>German</p>
            <p>English</p>
          </div>
          <div className='col'>
            <h3>Download Our App</h3>
            <p>Android App</p>
            <p>iOS App</p>
          </div>
          <div className='col'>
            <h3>Follow Us</h3>
            <div className='social-group'>
              <FiInstagram className='social-icon'/>
              <FiFacebook className='social-icon'/>
              {/* <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="social-icon fab fa-twitter"></i></a>
              <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="social-icon fab fa-facebook-f"></i></a>
              <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="social-icon fab fa-instagram"></i></a> */}
            </div>
          </div>
          <form>
            <h3>Subscribe to our Newsletter</h3>
            <input type='email' placeholder='Enter your email' />
            <FiMail className='mail-icon' />
            {/* <div className='social-group'>
              <FiInstagram className='social-icon'/>
              <FiFacebook className='social-icon'/>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default footer