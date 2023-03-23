import React, { useEffect, useState } from "react";
import Sliders from "./Sliders";
import Graph from "./Graph";
import axios from "axios";

function Calculator() {
  const [MonthlyInvestment, setMonthlyInvestment] = useState(500);
  const [InvestmentPeriod, setInvestmentPeriod] = useState(1);
  const [RateOfReturn, setRateOfReturn] = useState(1);
  const [YearlyIncrement, setYearlyIncrement] = useState(1);
  const [TotalSIPWithStepUp, setTotalSIPWithStepUp] = useState();
  const [graph,setGraph]=useState();
  const [MonthlyInvest, setMonthlyInvest]= useState();

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
          setTotalSIPWithStepUp(res.data.fresult.TotalSIPWithStepUp);
          setGraph(res.data.fresult.graph);
          setMonthlyInvest(res.data.fresult.MonthlyInvest)
        }
      );
  },[MonthlyInvestment,InvestmentPeriod,RateOfReturn,YearlyIncrement]) 
     
     
  return (
    <>
      <div className="calculator">
        <div className="calculatorText">
          <h2> SIP Step Up Calculator</h2>
          <p>
            It tells you how much wealth you can create by making monthly
            investment
          </p>
        </div>
        <div className="container">
          <Sliders
            MonthlyInvestment={MonthlyInvestment}
            InvestmentPeriod={InvestmentPeriod}
            RateOfReturn={RateOfReturn}
            YearlyIncrement={YearlyIncrement}
            updateValue = {updateValue}
          />
        <Graph graph={graph} MonthlyInvest={MonthlyInvest} InvestmentPeriod={InvestmentPeriod} TotalSIPWithStepUp={TotalSIPWithStepUp} />
        </div>
      </div>
    </>
  );
}

export default Calculator;
