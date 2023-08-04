import React, {useState, useEffect} from 'react'

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'

const Footer = () => {
  const [formData,setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted,setIsFormSubmitted] = useState(false);
  const [loading,setLoading] = useState(false);
  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me!</h2>
      
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@miguel.com" className="p-text">Hello@miguel.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (000) 000-0000" className="p-text">+1 (000) 000-0000</a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div classNamw="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput}/>
        </div>

        <div classNamw="app__flex">
          <input className="p-text" type="email" placeholder="Your Email " name="email" value={email} onChange={handleChangeInput}/>
        </div>

        <div>
          <textarea 
            className="p-text"
            placeholder="Your Message"
            value={message}
            name={message}
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'} </button>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);