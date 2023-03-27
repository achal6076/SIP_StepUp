import React from 'react'
import SideBar from './sideBar';
import RightPanel from './rightPanel';

// main function for Displaying left panel and right panel 

function SipCalculator() {
  return (
    <div className='sipCalculator'>
        <SideBar/>
        <RightPanel /> 
    </div>
    
    
  )
}

export default SipCalculator;

