import React,{ useState} from 'react'
// import FontAwesome from 'react-fontawesome';
import {FaFacebookMessenger,FaTwitter ,FaLinkedin, FaInstagram,FaEnvelope} from 'react-icons/fa'

function FooterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const handleNameChange = event =>{
    setName(event.target.value);
   
  }
  const handleEmailChange = event =>{
    setEmail(event.target.value);
 
  }
  const handleMessageChange = event =>{
    setMessage(event.target.value);
  }
  const handleSubmit = event =>{
    event.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  }
  return (

    <div className='foot'>
      <footer>
      <div className='fheads'>
        <ul>
            <div className='fmenu'>
            <li>Quick Links</li>
            <ul>
              <li><a href='/home'>Home</a></li>
              <li><a href='/About'>About</a></li>
              <li><a href='/Contact'>contact</a></li>
              <li><a href='/key-programs'>Key-programs</a></li>
              <li><a href='/helping'>How-to-help</a></li>
            </ul>
            </div>
            <div>
            <li>Location</li>
            <h4>Kigali,Rwanda</h4>
            </div>
            
            <li>Social Media
            <div className='icons'>
          <ul>
            <li><i className="fab fa-facebook-square"><FaFacebookMessenger /></i></li>
            <li><i className="fab fa-twitter-square"><FaTwitter /></i></li>
            <li><i className="fab fa-linkedin-square"><FaLinkedin /></i></li>
            <li><i className="fab fa-instagram-square"><FaInstagram /></i></li>
            <li><i className="fab fa-email-square"><FaEnvelope /></i></li>
          </ul>

        </div>
           </li>
            
            <div>
              <li>Contact us</li>
              <form onSubmit={handleSubmit}>
                <label>Name</label><input type="text" name="name" placeholder='Enter your names' value={name} onChange={handleNameChange} />
                <label>Email</label><input type="email" name="email" placeholder='Enter your email' value={email} onChange={handleEmailChange}/>
                <label>Message</label><textarea rows='4' name='message' cols='30' value={message} onChange={handleMessageChange} ></textarea>
                <button className='send' type='submit'>Send</button>
                    </form>
                    
            </div>
            
        </ul>
        <p>20202,copy rights reserved @Donate</p>
      </div>
     </footer>
    </div>
  )
}

export default FooterPage;
