import React from 'react'
import HeaderPage from './headerPage'
import FooterPage from './footerPage'
function Helping() {
  return (
    <div>
      <HeaderPage />
      
      <div className='helpingImage'>

      </div>
      <div className='moreInfo'>
          <h1>Give a helping hand:</h1>
          <p>Give a donation to help a large community</p>
            <h3>The provided donation will be used to :</h3>
            </div>
            <div className='moreInfo1'>
         <p>Buy school materials and pay school fees </p>
          <div className='schoolHelp'></div>
          <p>Provide food to the hungry</p>
          <div className='foodHelp'></div>
          <p>Ensure proper housing</p>
          <div className='housingHelp'></div>
          <p>Give medication to ones mostly in need</p>
          <div className='medicationHelp'></div>

          <h3><span>"TOGETHER WE CAN MAKE IT".</span>That is our mission</h3>
      </div>
      <FooterPage />
    </div>
  )
}

export default Helping
