import React,{ useState } from 'react'
import  mtn from './images/mtn.png'
import  airtelmomo from './images/airtelmomo.png'
import tigo from './images/tigo.png'



function DonateMoney(props) { 
  const[money, setMoney] = useState('');

  const makePayment = (e)=>{
    const amountChosen  = {
      'amountMoney' : e.target.value
    }
    document.querySelector('.amountMoney').value = amountChosen.amountMoney
    document.querySelector('.totalMount').value = amountChosen.amountMoney
  }
  
    
  return props.trigger ? (
    <div className='backDonate'>
        <div className='donateMoney'>
        <button className='close' onClick={() => props.closeModel(false)}>x</button>
          <h1>HNC</h1>
          <h2>Payment methods</h2>
          <div className='cardImages'>
              <img src={mtn} alt='mtn' />
              <img src={tigo} alt='tigo' />
              <img src={airtelmomo} alt='airtelmomo' />
             
              </div>
          <div className='inputAmount'>
            <div className='inputMoney'>
              <span className='typeMoney'>RwF</span>
              <input className="amountMoney" id="give-amount"  type="text"  autocomplete="off" data-amount="1"  onChange={e =>setMoney(e.target.value)} />
            </div>
          </div>
          <div className='amountInput' >
            <ul>
              <li>
                <button className='dollar' onClick={makePayment} value={1000}>1000RwF</button>
              </li>
              <li>
              <button className='dollar' onClick={makePayment} value={5000}> 5000RwF</button>
              </li>
              <li>
              <button className='dollar'  onClick={makePayment}  value={10000}>10000RwF</button>
              </li>
              <li>
              <button className='dollar'  onClick={makePayment}  value={25000}>25000RwF</button>
              </li>
              <li>
              <button className='dollar'  onClick={makePayment}  value={50000}>50000RwF</button>
              </li>
              <li>
              <button className='customMount' onClick={makePayment}>Custom amount</button>
              </li>
            </ul>

          </div>
          <div className='inputMoney'>
          <span className='totalMoney'>Total Donation:</span>
          <input className="totalMount" id="give-amount"  type="text"  autocomplete="off" data-amount="1"  onChange={e =>setMoney(e.target.value)} />
  
            </div>
            <button className='donateNow'>Donate now</button>
        </div>
    </div>
  ) : "";
}

export default DonateMoney;