import React from 'react'
import HeaderPage from './headerPage'
import FooterPage from './footerPage'
function Contact() {
  return (
    <div className='contact'>
    
    <HeaderPage />
     <h1>HNCF the door the sharpen future</h1>
     <div className='contacting'>
       <h2>Contact us</h2>
     <input type='text' name='name' placeholder='Enter your names' />
     <input type='eamil' name='email' placeholder='Enter your email' />
     <textarea rows='4' cols='30'></textarea>
     <button className='submit'>Submit</button>
    </div>
    <FooterPage /> 
    </div>
  )
}

export default Contact
