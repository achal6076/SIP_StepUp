import React, { useEffect, useState } from "react";

import axios from "axios";
import Graph from "../../src/components/graph";
import SliderCalculator from "./sliderCalculator";

function Calculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [rateOfReturn, setRateOfReturn] = useState(1);
  const [yearlyIncrement, setYearlyIncrement] = useState(1);

  const [monthlyInvestmentInput, setMonthlyInvestmentInput] = useState(500);
  const [investmentPeriodInput, setInvestmentPeriodInput] = useState(1);
  const [rateOfReturnInput, setRateOfReturnInput] = useState(1);
  const [yearlyIncrementInput, setYearlyIncrementInput] = useState(1);

  const [invalidInputMonthlyInvestment, setInvalidInputMonthlyInvestment] = useState(false);
  const [invalidInputInvestmentPeriod, setInvalidInputInvestmentPeriod] = useState(false);
  const [invalidInputRateOfReturn, setInvalidInputRateOfReturn] = useState(false);
  const [invalidYearlyIncrementInput, setInvalidYearlyIncrementInput] = useState(false);

  const [result, setResult] = useState();

  // updating  input values to change graph data for backend

  const onSliderChange = (type, val) => {
    switch (type) {
      case "monthlyInvestment":
        setMonthlyInvestment(val);
        break;
      case "investmentPeriod":
        setInvestmentPeriod(val);
        break;
      case "rateOfReturn":
        setRateOfReturn(val);
        break;
      case "yearlyIncrement":
        setYearlyIncrement(val);
        break;
    }
  };

  const onInputChange = (type, val) => {
    switch (type) {
      case "monthlyInvestment":
        setMonthlyInvestmentInput(val);
        break;
      case "investmentPeriod":
        setInvestmentPeriodInput(val);
        break;
      case "rateOfReturn":
        setRateOfReturnInput(val);
        break;
      case "yearlyIncrement":
        setYearlyIncrementInput(val);
        break;
    }
  };

  const setRange = (type) => {
    switch (type) {
      case "monthlyInvestment":
        return [500, 100000];
      case "investmentPeriod":
        return [1, 30];
      case "rateOfReturn":
        return [1, 30];
      case "yearlyIncrement":
        return [1, 12];
    }
  };

  const setInvalidInputStatus = (type, val) => {
    switch (type) {
      case "monthlyInvestment":
        setInvalidInputMonthlyInvestment(val);
        break;
      case "investmentPeriod":
        setInvalidInputInvestmentPeriod(val);
        break;
      case "rateOfReturn":
        setInvalidInputRateOfReturn(val);
        break;
      case "yearlyIncrement":
        setInvalidYearlyIncrementInput(val);
        break;
    }
  };

  const handleSliderChange = (event, newValue, type) => {
    onSliderChange(type, newValue);
    onInputChange(type, newValue);
    setInvalidInputStatus(type, false);
  };

  // updating input values

  const handleInputChange = (event, type) => {
    const [minimum, maximum] = setRange(type);
    let val = event.target.value;

    if (Number(val) < minimum) {
      onInputChange(type, val);
      onSliderChange(type, minimum);
      setInvalidInputStatus(type, true);
    } else if (Number(val) > maximum) {
      onInputChange(type, val);
      onSliderChange(type, maximum);
      setInvalidInputStatus(type, true);
    } else {
      onInputChange(type, val);
      onSliderChange(type, Number(val));
      setInvalidInputStatus(type, false);
    }
  };

  const handleBlur = (event, type) => {
    setInvalidInputStatus(type, false);

    const [minimum, maximum] = setRange(type);

    const val = event.target.value;

    if (Number(val) < minimum) {
      onSliderChange(type, minimum);
      onInputChange(type, minimum);
    } else if (Number(val) > maximum) {
      onSliderChange(type, maximum);
      onInputChange(type, maximum);
    }
  };

  // Updating rupees in Indian standard
  const toIndianRupees = (sum) => {
    return sum
      .toString()
      .replace(/\D/g, "")
      .replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
  };

  // axios call for graph

  useEffect(() => {
    axios
      .get("/getResult", {
        params: {
          monthlyInvestment: monthlyInvestment,
          investmentPeriod: investmentPeriod,
          rateOfReturn: rateOfReturn,
          yearlyIncrement: yearlyIncrement,
        },
      })
      .then((res) => {
        if (res.data.status === -1) {
          alert(res.data.message);
        } else {
          setResult(res.data.fresult);
        }
      });
  }, [monthlyInvestment, investmentPeriod, rateOfReturn, yearlyIncrement]);

  return (
    <>
      <div className="rightMain">
        <div className="calculatorText">
          <h2 className="calculatorTitle"> SIP Step Up Calculator</h2>
          <p>
            It tells you how much wealth you can create by making monthly
            investment
          </p>
        </div>
        <div className="container">
          <div className="leftContainer">
            <SliderCalculator
              index={0}
              type="monthlyInvestment"
              minimum={500}
              maximum={100000}
              steps={50}
              value={monthlyInvestment}
              inputVal={monthlyInvestmentInput}
              onSliderChange={onSliderChange}
              handleSliderChange={handleSliderChange}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              invalidInputStatus={invalidInputMonthlyInvestment}
            />
            <SliderCalculator
              index={1}
              type="investmentPeriod"
              minimum={1}
              maximum={30}
              steps={1}
              value={investmentPeriod}
              inputVal={investmentPeriodInput}
              onSliderChange={onSliderChange}
              handleSliderChange={handleSliderChange}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              invalidInputStatus={invalidInputInvestmentPeriod}
            />
            <SliderCalculator
              index={2}
              type="rateOfReturn"
              minimum={1}
              maximum={30}
              steps={0.1}
              value={rateOfReturn}
              inputVal={rateOfReturnInput}
              onSliderChange={onSliderChange}
              handleSliderChange={handleSliderChange}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              invalidInputStatus={invalidInputRateOfReturn}
            />
            <SliderCalculator
              index={3}
              type="yearlyIncrement"
              minimum={1}
              maximum={12}
              steps={1}
              value={yearlyIncrement}
              inputVal={yearlyIncrementInput}
              onSliderChange={onSliderChange}
              handleSliderChange={handleSliderChange}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              invalidInputStatus={invalidYearlyIncrementInput}
            />
          </div>
          <Graph
            result={result}
            investmentPeriod={investmentPeriod}
            toIndianRupees={toIndianRupees}
          />
        </div>
      </div>
    </>
  );
}

export default Calculator;
