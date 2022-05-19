import React,{useState} from 'react'

function DonateFood(props) {

  const [province, setProvince] = useState('')
  const [district, setDistrict] = useState('')
  const [sector, setSector] = useState('')
  const [cell, setCell] = useState('')
  const [village, setVillage] = useState('')
  const [food, setFood] = useState('')

  const handleProvinceChange  = event =>{
    setProvince(event.target.value);
  }
  const handleDistrictChange  = event =>{
    setDistrict(event.target.value);
  }
  const handleSectorChange  = event =>{
    setSector(event.target.value);
  }
  const handleCellChange  = event =>{
    setCell(event.target.value);
  }
  const handleVillageChange  = event =>{
    setVillage(event.target.value);
  }
  const handleFoodChange  = event =>{
    setFood(event.target.value);
  }
  const handleSubmit = event =>{
    event.preventDefault();
    setProvince('');
    setDistrict('');
    setSector('');
    setCell('');
    setVillage('')
    setFood('')
  }
  return props.trigger ? (
    <div className='donateFood'>
          
        <div className='donateimage'>
       
        </div>
        <div className='donateAddress'>
        <button className='close' onClick={() => props.closeModel(false)}>x</button>
        <h1>HNC</h1>
        <h3>Address</h3>
        <form onSubmit={handleSubmit} >
         <label>Province</label>
         <select name="province" id="" value={province} onChange={handleProvinceChange}>
         <option value="">East</option>
         <option value="">West</option>
         <option value="">South</option>
         <option value="">KIgali City</option>
         <option value="">North</option>
         </select>
         <label>District</label>
         <input type='text' placeholder='Enter district' value={district} onChange={handleDistrictChange}/>
         <label>Sector</label>
         <input type='text' placeholder='Enter sector' value={sector} onChange={handleSectorChange}/>
         <label>Cell</label>
         <input type='text' placeholder='Enter cell' value={cell} onChange={handleCellChange}/>
         <label>Village</label>
         <input type='text' placeholder='Enter village' value={village} onChange={handleVillageChange}/>
         <label>Food to donate</label>
         <input type='text' placeholder='Enter food to deliver' value={food} onChange={handleFoodChange}/>
         <button className='foodDonate' type='submit'>Donate now</button>
         </form>
         </div>

    </div>
  ) : "";
}

export default DonateFood;