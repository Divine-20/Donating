import React from 'react'
import HeaderPage from './headerPage'
import FooterPage from './footerPage'
import { useLinkClickHandler } from 'react-router-dom'
import { useState } from 'react/cjs/react.production.min'
function Contact() {
   const [value, setValue] = React.useState('');
   const [emailValue, setEmailValue] = React.useState('');
   const [commentValue, setCommentValue] = React.useState('');
   const handleNameChange = (event)=> {
     setValue(event.target.value);
   }
   const handleEmailChange = (event)=>{
     setEmailValue(event.target.emailValue);
   }
   const handleCommentChange =(event) =>{
     setCommentValue(event.target.value)
   }
  const handleSubmit = (event)=>{
    
      setValue('')
      
      setCommentValue('')
      setEmailValue('')
      event.preventDefault()
    
  }
  return (
    <div className='contact'>
    
    <HeaderPage />
     <h1>HNCF the door the sharpen future</h1>
     <div className='contacting'>
       <h2>Contact us</h2>
       <form onSubmit={handleSubmit}>
     <input type='text' value = {value} onChange={handleNameChange} name='name' placeholder='Enter your names' />
     <input type='email' value = {emailValue} onChange={handleEmailChange} name='email' placeholder='Enter your email' />
     <textarea rows='4' cols='30' value={commentValue} onChange={handleCommentChange}></textarea>
     <button className='submit'>Submit</button>
     </form>
    </div>
    <FooterPage /> 
    </div>
  )
} 

export default Contact
