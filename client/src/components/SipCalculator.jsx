import React from 'react'
import SideBar from '../../../client/src/components/SideBar';
import RightPanel from '../../../client/src/components/RightPanel';

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

