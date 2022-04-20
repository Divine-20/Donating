import React from 'react'
import { useNavigate, Link } from "react-router-dom";
// import Donation from './Donation';

function HeaderPage() {
  // const navigate = useNavigate();

  // const donate= () => {
  //   navigate("/Donation")
  // }
  return (
    <div  className='mainMenu'>
      <nav>
          <div>
              <h2 className='head'>HNCF</h2>
          </div>
          <div className='menu'>
              <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/About'>About</Link></li>
              <li><Link to='/Contact'>contact</Link></li>
              <li><Link to='/key-programs'>Key-programs</Link></li>
              <li><Link to='/how-to-help'>How-to-help</Link></li>
              <li><button className='donate'>Donate</button></li>
              
          </ul>
          
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="24 24 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
      </nav>
    </div>
  )
}

export default HeaderPage;
