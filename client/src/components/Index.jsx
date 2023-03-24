import React, { useEffect, useState } from "react";

import axios from "axios";
import Sliders from '../../../client/src/components/sliders'
import Graph from '../../../client/src/components/graph';
import Error from "../../../client/src/components/error";

function Calculator() {
  const [MonthlyInvestment, setMonthlyInvestment] = useState(500);
  const [InvestmentPeriod, setInvestmentPeriod] = useState(1);
  const [RateOfReturn, setRateOfReturn] = useState(1);
  const [YearlyIncrement, setYearlyIncrement] = useState(1);
  const [result, setResult]=useState();
  const [error, setError] = useState();
  
  // updating  input values to change graph data for backend

  const updateValue =( type, value) =>{
    if(type === 0){
      setMonthlyInvestment(value);
    }
    else if(type === 1){
      setInvestmentPeriod(value);
    }
    else if(type === 2){
      setRateOfReturn(value);
    }
    else if( type === 3 ){
      setYearlyIncrement(value);
    }
  }

  
  // axios call for graph 

  useEffect(()=>{
    axios.get('/getResult', 
                   { 
                    params: {
                    MonthlyInvestment : MonthlyInvestment,
                    InvestmentPeriod: InvestmentPeriod,
                    RateOfReturn: RateOfReturn,
                    YearlyIncrement: YearlyIncrement
                    }   
         }
        ).then((res) =>{
          if(res.data.status === -1)
          {
            setError(res.data.message);
          }
          else{
            setResult(res.data.fresult);
          }
        }
      );
  },[MonthlyInvestment,InvestmentPeriod,RateOfReturn,YearlyIncrement]) 
  
  // console.log(result);
     
  return (
    <>
      <div className="rightMain">
        <div className="calculatorText">
          <h2> SIP Step Up Calculator</h2>
          <p>
            It tells you how much wealth you can create by making monthly
            investment
          </p>
        </div>
        <div className="leftContainer">
          <Sliders
            MonthlyInvestment={MonthlyInvestment}
            InvestmentPeriod={InvestmentPeriod}
            RateOfReturn={RateOfReturn}
            YearlyIncrement={YearlyIncrement}
            updateValue = {updateValue}
          />
           {error ? <h2 className="rightContainer">{error}</h2> : <Graph result={result} InvestmentPeriod={InvestmentPeriod} />}
        {/* <Graph result={result} InvestmentPeriod={InvestmentPeriod}/> */}
        </div>
      </div>
    </>
  );
}

export default Calculator;
