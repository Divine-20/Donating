import React,{ useState} from 'react'
// import ImageResponsive from 'react-image-responsive';
import HeaderPage from './headerPage';
import { useNavigate } from 'react-router-dom';
import FooterPage from './footerPage';

function LandingPage() {
  const navigate = useNavigate();
    // const about=() => {
      
    // }
  
  return (
    <div>
    <div className='myHead'>
    <HeaderPage/>
    
      <h1>WELCOME TO <span>HNCF!</span></h1>
      <p>HNCF is a web app for helping<br />children in need especially school<br />
      dropouts,the main focus of HNCF<br />is to help chidren.</p>
      <div className='addImg'>
      <div className='mybtns'>
    <button className='learn'>Learn more</button>
    <button className='latest'>Latest</button>
    <button className='popular'>Popular</button>
    <button className='updates'>Updates</button>

   </div>
   {/* <img src='simon (2).jpg' alt='simon (2).jpg' /> */}
   <div className='divImage'>

   </div>
   </div>
  </div>
  <FooterPage />
    
    </div>
  )
}

export default LandingPage;
