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
     const [fname, setFname] = useState('');
     const [lname, setLname] = useState('');
     const [email,setEmail] = useState('');
     const [telephone, setTelephone] = useState('');

     const handleFnameChange = event =>{
       setFname(event.target.value);
     }
     const handleLnameChange = event =>{
      setLname(event.target.value);
    }

    const handleEmailChange = event =>{
      setEmail(event.target.value);
    }

    const handleTelephoneChange = event =>{
      setTelephone(event.target.value);
    }
    const handleSubmit=event=>{
      event.preventDefault();
      setFname('')
      setLname('')
      setEmail('')
      setTelephone('')
    }

return (
    <div>
      <DonateMoney trigger  = {openPopUp} closeModel={setOpenPopUp}/>
      <DonateFood trigger  = {openModel} closeModel={setOpenModel}/>
     
      <HeaderPage />
      
    <div className='donateForm'>
    
        <h1>Donations<br /></h1>

        <p>You can make charitable donations to our team by filling out the form below.</p>
       
         <div className='formDetails'>
        <form onSubmit={handleSubmit}>
            <label>Firstname</label><input type='text' name='fname' value={fname} onChange={handleFnameChange}/>
            <label>Lastname</label><input type='text' name='lname' value={lname} onChange={handleLnameChange} />
            <label>Email</label><input type='email' name='email' value={email} onChange={handleEmailChange} />
            <label>Telephone</label><input type='telephone' name='telephone' value={telephone} onChange={handleTelephoneChange} />
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
