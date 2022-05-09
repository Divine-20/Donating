import React from 'react'
import HeaderPage from './headerPage'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import DonateMoney from './donateMoney'
import DonateFood from './donateFood'
import FooterPage from './footerPage'
function Donate() {
     const navigate = useNavigate();
     
     const [openPopUp, setOpenPopUp] = useState(false);
     const [openModel, setOpenModel] = useState(false)

  return (
    <div>
      <DonateMoney trigger  = {openPopUp} closeModel={setOpenPopUp}/>
      <DonateFood trigger  = {openModel} closeModel={setOpenModel}/>
     
      <HeaderPage />
      
    <div className='donateForm'>
    
        <h1>Donations<br /></h1>

        <p>You can make charitable donations to our team by filling out the form below.</p>
       
         <div className='formDetails'>
        <form>
            <label>Firstname</label><input type='text' name='firstname'/>
            <label>Lastname</label><input type='text' name='lastname'/>
            <label>Email</label><input type='email' name='email'/>
            <label>Telephone</label><input type='telephone' name='telephone'/>
            <button  onClick={()=> {setOpenModel(true)}} className='submit' type='button'>Donate with food</button>
            <button  onClick={()=> {setOpenPopUp(true)}} className='submitResp' type='button'>Donate with Money</button>
        </form>
            {/* <button  onClick={()=> {setOpenPopUp(true)}}>Donate with Money</button> */}
        </div>

    </div>
   
      <FooterPage />
    </div>
  )
}

export default Donate;
