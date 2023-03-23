import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { useState } from "react";

// Changing and Displaying data for sliders 

function SliderCalculator(props) {
  const [inputValue, setInputValue] = useState(props.minimum);

  const MonthlyInvestmentArray = [
    {
      value: 500,
      label: "500",
    },
    {
      value: 20000,
      label: "20000",
    },
    {
      value: 40000,
      label: "40000",
    },
    {
      value: 60000,
      label: "60000",
    },
    {
      value: 80000,
      label: "80000",
    },
    {
      value: 100000,
      label: "100000",
    },
  ];

  const InvestmentPeriodArray = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 13,
      label: "13",
    },
    {
      value: 15,
      label: "15",
    },
    {
      value: 18,
      label: "18",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 24,
      label: "24",
    },
    {
      value: 27,
      label: "27",
    },
    {
      value: 30,
      label: "30",
    },
  ];

  const ExpectedRateOfReturnArray = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 3.9,
      label: "3.9",
    },
    {
      value: 6.8,
      label: "6.8",
    },
    {
      value: 9.7,
      label: "9.7",
    },
    {
      value: 12.6,
      label: "12.6",
    },
    {
      value: 15.5,
      label: "15.5",
    },
    {
      value: 18.4,
      label: "18.4",
    },
    {
      value: 21.3,
      label: "21.3",
    },
    {
      value: 24.2,
      label: "24.2",
    },
    {
      value: 27.1,
      label: "27.1",
    },
    {
      value: 30,
      label: "30",
    },
  ];

  const YearlyIncrementArray = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 9,
      label: "9",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 11,
      label: "11",
    },
    {
      value: 12,
      label: "12",
    },
  ];

  const LabelArray = [
    MonthlyInvestmentArray,
    InvestmentPeriodArray,
    ExpectedRateOfReturnArray,
    YearlyIncrementArray,
  ];
  const TitleArray = [
    "Monthly Investment (Rs.)",
    "Investment Period (years)",
    "Expected Rate of Return (% p.a)",
    "Yearly Increment (%)",
  ];
  const Input2 = styled(MuiInput)`
    width: 80px;
  `;
// updating slider values 

  const handleSliderChange = (event, newValue) => {
    props.setValue(props.index, newValue);
    setInputValue(newValue);
  };

// updating input values 

  const handleInputChange = (event) => {
    let val = event.target.value;
    if (val.startsWith("-")) {
      alert("Please Enter valid value .");

      setInputValue(val);
      props.setValue(props.index, props.minimum);
      return;
    }
    if (val < props.minimum) {
      alert("please enter greater value");

      setInputValue(val);
      props.setValue(props.index, props.minimum);
      return;
    }
    if (val > props.maximum) {
      alert("Please Enter less than 1,00,000");

      setInputValue(val);
      props.setValue(props.index, props.maximum);
      return;
    }
    setInputValue(val);
    props.setValue(props.index, val === "" ? props.minimum : val);
  };

  const blur = (event) => {
    let val = event.target.value;
    if (val === "-") {
      props.setValue(props.index, props.minimum);
      setInputValue(props.minimum);
      return;
    }
    val = Number(val);
    if (val < props.minimum) {
      props.setValue(props.index, props.minimum);
      setInputValue(props.minimum);
      return;
    }
    if (val > props.maximum) {
      props.setValue(props.index, props.maximum);
      setInputValue(props.maximum);
      return;
    }
  };
  return (
    <div className="slider-area">
      <Box sx={{ width: 510 }}>
        <Grid className="demo2" container>
          <Grid item>
            <Typography gutterBottom>{TitleArray[props.index]}</Typography>
          </Grid>

          <Grid className="sliderInput" item>
            <Input2
              value={inputValue}
              size="small"
              onBlur={blur}
              onChange={handleInputChange}
              inputProps={{
                step: props.steps,
                minimum: props.minimum,
                max: props.maximum,
                types: "number",
              }}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs>
            <Slider
              aria-label="Custom marks"
              minimum={props.minimum}
              max={props.maximum}
              marks={LabelArray[props.index]}
              step={props.steps}
              value={props.value}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default SliderCalculator;
