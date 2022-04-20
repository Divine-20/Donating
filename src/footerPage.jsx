import React from 'react'
// import FontAwesome from 'react-fontawesome';

function FooterPage() {
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
            
            <li>Social Media</li>
            <div className='icons'>
          <ul>
            <li><i className="fab fa-facebook-square"></i></li>
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-pinterest"></i></li>
            <li><i className="fab fa-instagram"></i></li>
          </ul>

        </div>

            
            <div>
              <li>Contact us</li>
              <form>
                <label>Name</label><input type="text" name="Name" placeholder='Enter your names' />
                <label>Email</label><input type="text" name="email" placeholder='Enter your email' />
                <label>Message</label><textarea rows='4' cols='30'></textarea>
                    </form>
                    <button className='send'>Send</button>
            </div>
            
        </ul>
        <p>20202,copy rights reserved @Donate</p>
      </div>
     </footer>
    </div>
  )
}

export default FooterPage;
