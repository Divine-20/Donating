import React from 'react'
import { useNavigate } from "react-router-dom";
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
              <li><a aria-activedescendant='active' href='/home'>Home</a></li>
              <li><a href='/About'>About</a></li>
              <li><a href='/Contact'>contact</a></li>
              <li><a href='/key-programs'>Key-programs</a></li>
              <li><a href='/how-to-help'>How-to-help</a></li>
              <li><button className='donate'>Donate</button></li>
              
          </ul>
          
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="24 24 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
      </nav>
    </div>
  )
}

export default HeaderPage;
