import React from 'react'
import {Link} from 'react-router-dom';
import './footer.css'
export default function Footer() {
  return (
    <footer id='footer'>
      <div className="footer__subscribe">
          <div className="subscribe-content">
              <h3 className='footer__title'>SUBSCRIBE NEWSLETTER</h3>
              <p>Get all latest information on Events, Sales and Offers. Sign up for newsletter today.</p>
          </div>
          <div className="subscribe-sent">
            <input type="text" placeholder='Email Address' />
            <button className="btn-sent-mail"> SUBSCRIBE</button>
          </div>
          <div className="subscribe-social">
              <div className="visit-instagram"><box-icon type='logo' name='instagram' color='#ffffff'></box-icon></div>
              <div className="visit-twitter"><box-icon name='twitter' type='logo' color='#ffffff' ></box-icon></div>
              <div className="visit-facebook"><box-icon name='facebook' type='logo' color='#ffffff' ></box-icon></div>
          </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__contact">
          <div className="footer__contact__item">
            <h3 className='footer__title'>ADDRESS</h3>
            <span>123 Street Name, City</span>
          </div>
          <div className="footer__contact__item">
            <h3 className='footer__title'>PHONE</h3>
            <span>Toll Free: 023212323232</span>
          </div>
          <div className="footer__contact__item">
            <h3 className='footer__title'>Email</h3>
            <span>hung@gmail.com</span>
          </div>
        </div>  
          <div className="footer__right">
            <div className="footer__right__top">
              <div className="footer__nav">
                <h3 className='footer__title'>My Account</h3>
                <div className="footer__nav__list">
                  <div className="row">
                      <Link to='/'>About us</Link>
                      <Link to='/'>Contact us</Link>
                      <Link to='/'>My Account</Link>
                  </div>
                  <div className="row">
                      <Link to='/'>Order history</Link>
                      <Link to='/'>Advanced search</Link>
                      <Link to='/'>Login</Link>
                  </div>
                </div>
              </div>
              <div className="main__features">
                <h3 className='footer__title'>MAIN FEATURES</h3>
                <div className="footer__nav__list">
                  <div className="row">
                    <Link to='/'>Super Fast Wordpress</Link>
                    <Link to='/'>Theme</Link>
                    <Link to='/'>1st Fully working Ajax</Link>
                    <Link to='/'>Theme</Link>
                    <Link to='/'>36 Unique Shop Layouts</Link>
                  </div>
                  <div className="row">
                    <Link to='/'>Powerful Admin Panel</Link>
                    <Link to='/'>Mobile & Retina</Link>
                    <Link to='/'>Optimized</Link>
                  </div>
                </div>
              </div>
              <div className="working-time">
                <h3 className='footer__title'>WORKING DAYS/HOURS</h3>
                <span>Mon - Sun / 9:00AM - 8:00OM</span>
              </div>
            </div>
            <div className="footer__right__bottom">
              <span>© Porto Magento 2021. All Rights Reserved</span>
              <img src="./payment_logo.png" alt="" />
            </div>
          </div>
      </div>
    </footer>
  )
}
