import React from 'react'

import HeaderPage from './headerPage'
import FooterPage from './footerPage'


function About() {
  return (
    <div>
    
      <HeaderPage />
      <div className='mainDiv'>
       </div>
       <div className='paragraph'>
       <div className='para1'>
       <h1>More about us</h1>
       
       <p>The Hope for needy children, is powered by passionate <br />
       people to donate and help children to strengthen the future
       <br />This is the greatest commitment to ending poverty  through
       <br /> service and education.Together, we're breaking the cycle of 
       <br />poverty, illiteracy, and low expections at home and abroad.<br />  
       Can you join us?</p><br />
       </div>
       <div className='para2'>
         <h1>What we do </h1>
       <p>Education and service are at the heart of everything we do.<br />
       The most thing we do we help the needy and serve them as well.<br />
       Together we can make it and shun out poverty in world wide.<br />
       Give a helping hand to your friend tommorow he will lift you up.<br />
       Poverty,illiteracy and ignorance run out from the way.</p>  
       </div>
      
        </div>
        <h3>"Strive  for tomorrow my friends<br />Bring one to our family make his<br />
        life perfect Boost happiness for <br />tomorrow survival sharpen the <br />
        <span>"FUTURE".</span> "</h3>
      <FooterPage />
    </div>
  )
}

export default About;
