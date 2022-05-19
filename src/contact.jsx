import React, {useState} from 'react'
import HeaderPage from './headerPage'
import FooterPage from './footerPage'
// import { useLinkClickHandler } from 'react-router-dom'

function Contact() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [comment, setComment] = useState('');

   const handleNameChange = (event)=> {
     setName(event.target.value);
     console.log(name);
   }
   const handleEmailChange = (event)=>{
     setEmail(event.target.value);
     console.log(email);
   }
   const handleCommentChange =(event) =>{
     setComment(event.target.value)
     console.log(comment);
   }
  const handleSubmit = (event)=>{
      event.preventDefault();
      setName('');
      setComment('');
      setEmail('');
      
  }
  return (
    <div className='contact'>
    
    <HeaderPage />
     <h1>HNCF the door the sharpen future</h1>
     <div className='contacting'>
       <h2>Contact us</h2>
       <form onSubmit={handleSubmit}>
     <input type='text' value = {name} onChange={handleNameChange} name='name' placeholder='Enter your names' />
     <input type='email' value = {email} onChange={handleEmailChange} name='email' placeholder='Enter your email' />
     <textarea rows='4' cols='30' value={comment} onChange={handleCommentChange}></textarea>
     <button className='submit' type='submit'>Submit</button>
     </form>
    </div>
    <FooterPage /> 
    </div>
  )
} 

export default Contact
