import React from 'react'
import HeaderPage from './headerPage'

import FooterPage from './footerPage'
function Donate() {
     
  return (
    <div>
      <HeaderPage />
    <div>
        <h1>Donations<br /></h1>

        <p>You can make charitable donations to our team by filling out the form below.</p>

        <form>
            <input type='text' />
        </form>
    </div>
      <FooterPage />
    </div>
  )
}

export default Donate;
