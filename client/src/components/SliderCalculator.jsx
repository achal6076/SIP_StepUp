import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

// Changing and Displaying data for sliders

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
    value: 7,
    label: "7",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 11,
    label: "11",
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
    value: 17,
    label: "17",
  },
  {
    value: 19,
    label: "19",
  },
  {
    value: 21,
    label: "21",
  },
  {
    value: 23,
    label: "23",
  },
  {
    value: 25,
    label: "25",
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

function valuetext(value) {
  return `${value}`;
}
// updating slider values
function SliderCalculator(props) {
  return (
    <div className="sliderArea">
      <Box sx={{ maxWidth: 510 }}>
        <Grid className="demo2" container>
          <Grid item>
            <Typography gutterBottom>{TitleArray[props.index]}</Typography>
          </Grid>

          <Grid className="sliderInput" item>
            <Input2
              value={props.inputVal}
              size="small"
              onBlur={(event)=>props.handleBlur(event, props.type)}
              onChange={(event)=>props.handleInputChange(event, props.type)}
              inputProps={{
                step: props.steps,
                minimum: props.minimum,
                maximum: props.maximum,
                type: "number"
              }}
            />
          </Grid>
        </Grid>
        {props.invalidInputStatus &&  <div className="invalidInput">Invalid Input</div>}

        <Grid container>
          <Grid item xs>
            <Slider
              aria-label="Custom marks"
              defaultValue={props.val}
              getAriaValueText={valuetext}
              step={props.steps}
              minimum={props.minimum}
              max={props.maximum}
              marks={LabelArray[props.index]}
              value={props.value}
              onChange={(event, newValue)=>props.handleSliderChange(event, newValue, props.type)}
              aria-labelledby="input-slider"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default SliderCalculator;
