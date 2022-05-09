import React from 'react'
function DonateFood(props) {
  return props.trigger ? (
    <div className='donateFood'>
          
        <div className='donateimage'>
       
        </div>
        <div className='donateAddress'>
        <button className='close' onClick={() => props.closeModel(false)}>x</button>
        <h1>HNC</h1>
        <h3>Address</h3>
        <form>
         <label>Province</label>
         <select name="province" id="">
         <option value="">East</option>
         <option value="">West</option>
         <option value="">South</option>
         <option value="">KIgali City</option>
         <option value="">North</option>
         </select>
         <label>District</label>
         <input type='text' placeholder='enter district'/>
         <label>Sector</label>
         <input type='text' placeholder='enter sector'/>
         <label>Cell</label>
         <input type='text' placeholder='enter cell'/>
         <label>Village</label>
         <input type='text' placeholder='enter village'/>
         <label>Food to donate</label>
         <input type='text' placeholder='enter food'/>
         <button className='foodDonate' type='button'>Donate now</button>
         </form>
         </div>

    </div>
  ) : "";
}

export default DonateFood;