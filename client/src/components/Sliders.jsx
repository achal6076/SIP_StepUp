import React from 'react';
import SliderCalculator from './sliderCalculator';

// Type of Sliders 

function Sliders(props) {
  return (
    <div className='sliders' >
      <SliderCalculator index={0} minimum={500} maximum={100000} steps ={500} value={props.MonthlyInvestment} setValue={props.updateValue}/>
      <SliderCalculator index={1} minimum={1} maximum={30} steps= {1} value={props.InvestmentPeriod} setValue={props.updateValue}/>
      <SliderCalculator index={2} minimum={1} maximum={30} steps= {.1} value={props.RateOfReturn} setValue={props.updateValue}/>
      <SliderCalculator index={3} minimum={1} maximum={12} steps= {1} value={props.YearlyIncrement} setValue={props.updateValue}/>
    </div>
  )
}

export default Sliders;