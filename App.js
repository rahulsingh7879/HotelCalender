import React from 'react'
import './App.css'
import {BtnCount , BtnCount2} from './components/BtnCount'
// import ReactHorizontalDatePicker from "react-horizontal-strip-datepicker";
// import "react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css";

const App = () => {
  return (
    <div>
  <section className="sec-1 ">
  <h3 className='container'>Manage Inventory, Rates Restrictions <span style={{fontSize: "10px" , fontWeight: "400"}}>Rates in :INR</span></h3>
    <ul className='container nav-1'>
    <li>All Rooms</li>
    <li>Group Rate Rooms </li>
    <button type="button" class="btn py-0 rounded-pill btn-success"><span className='mb-2'>new</span></button>
    
    <li>Hourly Stays </li>
    <button type="button" class="btn py-0 btn-success rounded-pill">new</button>
    
    </ul>
    <hr className='container ' />

  <div className="sec1_1 d-flex justify-content-between">
  <ul className="nav-2 d-flex container">
    <li>B2C</li>
    <li>MYBIZ</li>
    <li>B2B</li>
    <li>CORPORATE RFP</li>
    <li>BUNDELED</li>
    <li>MY PARTNER</li>

    </ul>
    <ul style={{listStyle: "none" }} className='d-flex p-3 '>
    <li>Fir</li>
    <li>Sect</li>
    </ul>
  </div>
  </section>
  <div className="container">
  <div class="row ">
  <div class="col-2 border">
 
  <i class="fa-light fa-bed-front"></i> Roooms & Rates <i class="fa-solid fa-circle-chevron-right"></i>
  </div>
  <div class="col border">
  <BtnCount2 day = "sun" btnName = "8"/>
  <p>jun</p>
    
  </div>
  <div className="col border">
  <BtnCount2 day = "sun" btnName = "9"/>
  <p>june</p>
  
  </div>
  <div className="col border">
  <BtnCount2 day = "sun" btnName = "10"/>
  <p>jun</p>
  
  </div>
  <div className="col border">
  <BtnCount2 day = "sun" btnName = "11"/>
  <p>jun</p>
  
  </div>
  <div className="col border">
  <BtnCount2 day = "sun" btnName = "12"/>
  <p>jun</p>
  
  </div>
  <div className="col border">
  <BtnCount2 day = "sun" btnName = "13"/>
  <p>jun</p>
  </div>
  <div className="col border">
  <BtnCount2 day = "sun" btnName = "14"/>
  <p>jun</p> 
  </div>
 </div>
 </div>


   <h1 className='container fs-4 '><i class="fa-sharp fa-solid fa-circle-plus"></i>View Rates</h1>
   <div className="room-data container">
   <div class="row">
   <div class="col-2 border">
   <i class="fa-solid fa-plus"></i> Delux Room <i class="fa-solid fa-circle-chevron-right"></i>
   </div>
   <div class="col border">
     <BtnCount btnName = "10"/>
     <p>2 sold</p>
     
   </div>
   <div className="col border">
   <BtnCount btnName = "10"/>
   <p>2 sold</p>
   
   </div>
   <div className="col border">
   <BtnCount btnName = "10"/>
   <p>2 sold</p>
   
   </div>
   <div className="col border">
   <BtnCount btnName = "10"/>
   <p>2 sold</p>
   
   </div>
   <div className="col border">
   <BtnCount btnName = "10"/>
   <p>2 sold</p>
   
   </div>
   <div className="col border">
   <BtnCount btnName = "10"/>
   <p>2 sold</p>
   </div>
   <div className="col border">
   <BtnCount btnName = "10"/>
   <p>2 sold</p> 
   </div>
 </div>
 <div class="row">
 <div class="col-2 border">

 <i class="fa-solid fa-plus"></i> Exucutive Room <i class="fa-solid fa-circle-chevron-right"></i>
 </div>
 <div class="col border">
 <BtnCount btnName = "10"/>
 <p>2 sold</p>
   
 </div>
 <div className="col border">
 <BtnCount btnName = "10"/>
 <p>2 sold</p>
 
 </div>
 <div className="col border">
 <BtnCount btnName = "10"/>
 <p>2 sold</p>
 
 </div>
 <div className="col border">
 <BtnCount btnName = "10"/>
 <p>2 sold</p>
 
 </div>
 <div className="col border">
 <BtnCount btnName = "10"/>
 <p>2 sold</p>
 
 </div>
 <div className="col border">
 <BtnCount btnName = "10"/>
 <p>2 sold</p>
 </div>
 <div className="col border">
 <BtnCount btnName = "10"/>
 <p>2 sold</p> 
 </div>
</div>

   </div>
    </div>
  )
}

export default App