import React from 'react'
import './PhoneStyles.css'

const Phone = () => {
  return (
    <div className='phone'>
      <div className='container'>
        <div className='content'>



      {/* SOCIAL PROOF */}
      {/* AWARDS */}
        <div className='container-awards'>
          <img className='award-icons-1' src={require('../../assets/img/android-choice.png')} alt='' />
          <img className='award-icons-2' src={require('../../assets/img/google-choice.png')} alt='' />
          <img className='award-icons-3' src={require('../../assets/img/medal.png')} alt=''/>
        </div>
        {/* END AWARDS */}
        <div className='stats-container'>
          <div className='stats-item stats-item-1'>
            5M+
            <div className='stats-term'>
              HAPPY LEARNERS
              <div className='stats-text'>
                A fast growing community of language enthusiasts form all over the world
              </div>
            </div>
          </div>
          <div className='stats-item stats-item-1'>
            4.7+
            <div className="stats-term">
              STARS
              <div className='stats-text'>
                More than 400,000 users have rates us 5 stars!
              </div>
            </div>
          </div>
          <div className='stats-item stats-item-1'>
            200+
            <div className='stats-term'>
              LESSONS
              <div className='stats-text'>
                Packed with fun lessons which include vocabulary, grammar, speech recognition
              </div>
            </div>
          </div>
        </div>
        {/* END SOCIAL PROOF */}


          {/* <h2><span>Phone</span> Recovery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p> */}
        </div>

        {/* APP & TABLET SECTION */}
          <div className='app-section' >
            <div className='app-content-container'>
              <div className='row row-content'>
                <div className='col-sm-5 col-md-8 mx-auto'>
                  <h2 className='app title' id='app-h2'>More Ways to Learn</h2>
                    <p className='app-content'>Whether you're at home or on the go, you can take Tootle Lingo anywhere with you. Synchronize all your devices to your account and you can learn anywhere! Learn everything you need to for real world conversations or for business. You'll have access to all your lessons, games, videos and your mentor. Our app was created by a team of expert language teachers designed to help you with any level for all learners.</p>
                </div>
              </div>
            </div>

            <div className='phone-container'>
              <img className='phone-img' src={require('../../assets/img/app-nobg.png')} alt='Tootle Lingo Phone App Preview' />
              <img className='phone-img'  src={require('../../assets/img/lesson-img.png')} alt='Tootle Lingo Phone App Preview' />
            </div>
            
            <div className='app-container'>
              <img src={require('../../assets/img/phone-icon-lg.png')} alt='Tootle Lingo App Store Icon Preview' />
            </div>
          
            <div className='dl-btn-container'>
              <div className='row app-download-buttons'>
                <div className='col-lg-6 col-md-6'>
                  <a href='https://www.apple.com/app-store/' target='_blank'><button type='button' className='btn btn-dark btn-lg download-button'><i className='fab fa-apple'></i> Download</button></a>
                  <a href='https://play.google.com/store?hl=en_US&gl=US' target='_blank'><button type='button' className='btn btn-outline-dark btn-lg download-button'><i className='fab fa-google-play'></i> Download</button></a>
                </div>
              </div>
            </div>


          </div>
          {/* END APP & TABLET SECTION */}










      </div>

    </div>
  )
}

export default Phone