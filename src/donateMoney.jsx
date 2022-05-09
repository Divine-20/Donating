import React from 'react'
import  mastercard from './images/mastercard.png'
import  amex from './images/amex.png'
import discover from './images/discover.png'
import visa from './images/visa.png'
import paypal from './images/paypal.png'


function DonateMoney(props) { 
  
  return props.trigger ? (
    <div className='backDonate'>
        <div className='donateMoney'>
        <button className='close' onClick={() => props.closeModel(false)}>x</button>
          <h1>HNC</h1>
        
          <div className='cardImages'>
              <img src={mastercard} alt='mastercard' />
              <img src={amex} alt='amex' />
              <img src={discover} alt='discover' />
              <img src={visa} alt='visa' />
              <img src={paypal} alt='paypal' />
          </div>
          <div className='inputAmount'>
            <div className='inputMoney'>
              <span className='typeMoney'>$</span>
              <input className="amountMoney" id="give-amount" name="give-amount" type="text" inputmode="decimal" placeholder="" value="1" autocomplete="off" data-amount="1" />
            </div>
          </div>
          <div className='amountInput' >
            <ul>
              <li>
                <button className='dollar'>$1</button>
              </li>
              <li>
              <button className='dollar'>$5</button>
              </li>
              <li>
              <button className='dollar'>$10</button>
              </li>
              <li>
              <button className='dollar'>$25</button>
              </li>
              <li>
              <button className='dollar'>$50</button>
              </li>
              <li>
              <button className='customMount'>Custom amount</button>
              </li>
            </ul>

          </div>
          <div className='inputMoney'>
          <span className='totalMoney'>Total Donation:</span>
              <input className="totalAmount" id="give-amount" name="give-amount" type="text" inputmode="decimal" placeholder="" value="$1" autocomplete="off" data-amount="1" />
  
            </div>
            <button className='donateNow'>Donate now</button>
        </div>
    </div>
  ) : "";
}

export default DonateMoney;