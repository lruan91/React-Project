import React from 'react'
import './HeroStyles.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='content'>
          {/* <h1>LEARN LANGUAGES IN</h1>
          <h1 className='blue'>A <span>FUN</span> AND EXCITING</h1>
          <h1>WAY!</h1>
          <h2>The world's best way to learn a language!</h2> */}
            <h1>Learn languages in a <span>fun</span> and exciting way!</h1>
            <p className="best-text">The world's best way to learn a language!</p>
          <div><button className='info-btn'>Start Learning</button></div>

        </div>
      </div>
    </div>
  )
}

export default Hero