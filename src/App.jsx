// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './landingPage';
import About from './about';
import Contact from './contact';
import Relatedwork from './relatedwork';
import Helping from "./helping";
import Donate from "./donate";
import DonateMoney from "./donateMoney";

function App() {

return (
  <div>
           <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/key-programs' element={<Relatedwork />}></Route>
          <Route path='/how-to-help' element={<Helping />}></Route>
          <Route path='/Donate' element={<Donate />}></Route>
          {/* <Route path='/Donatewithmoney' element={<DonateMoney />}></Route> */}
        </Routes>
      </BrowserRouter>
     
      </div>
     );
}

export default App;
