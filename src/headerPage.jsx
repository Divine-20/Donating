import React, { useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
// import Donation from './donation';
import {FaBars,FaTimes } from 'react-icons/fa'
function HeaderPage(props) {
  const navigate = useNavigate();
 const[isclicked, setIsClicked] = useState(false);

  return(
    <div  className='mainMenu'>
      <nav>
          <div>
              <h2 className='head'>HNCF</h2>
          </div>
          <div className='menu'>
              <ul className={isclicked ? "tmenu" : "nav-links"}
              onClick={()=> setIsClicked(true)}
              >
              <li><Link to='/' >Home</Link></li>
              <li><Link to='/About'>About</Link></li>
              <li><Link to='/Contact'>contact</Link></li>
              <li><Link to='/key-programs'>Key-programs</Link></li>
              <li><Link to='/how-to-help'>How-to-help</Link></li>
              <li><button onClick={()=> navigate('/donate')} className='donate'>Donate</button></li>
              
          </ul>
          
          </div>
        
          <button onClick={()=> {setIsClicked(!isclicked)}} className='menu-icon'>
            { isclicked ? (
            
            <i className="fab fa-times-square" id='svgIcon'><FaTimes /></i>
            ) : (
              <i className="fab fa-bars-square" id='svgIcon'><FaBars /></i>
            )}
            </button>
      </nav>
    </div>
  )
}

export default HeaderPage;
