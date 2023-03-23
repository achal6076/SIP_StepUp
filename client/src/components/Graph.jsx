import React from "react";
import { Label } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


// Handling Graph area using inputs from sliders 
function Graph(props) {

  // Updating rupees in Indian standard
  function toIndianRupees(sum) {
    return sum
      .toString()
      .replace(/\D/g, "")
      .replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
  }

  return (
    <>
      <div className="graphi">
        <div className="textforgraph">
          <span>
            After{" "}
            <span className="AfterYearsOf">
              {" "}
              {props.InvestmentPeriod} year's
            </span>{" "}
            you will have
          </span>
          <h2>₹ {toIndianRupees(Number(props.TotalSIPWithStepUp))}</h2>
          <p>
            That's
            <span className="currencyRupeeInPara">
              ₹{" "}
              {toIndianRupees(
                Number(props.TotalSIPWithStepUp - props.MonthlyInvest)
              )}
            </span>{" "}
            as potential capital gains on your investment of
            <span className="currencyRupeeInPara2">
              ₹ {toIndianRupees(Number(props.MonthlyInvest))}
            </span>
          </p>
        </div>
        <ResponsiveContainer className="graph-div" width="90%" aspect={1.6}>
          <LineChart
            width={550}
            height={550}
            min={0}
            max={5000000}
            data={props.graph}
            margin={{
              top:5,
              bottom:20,
              left: 7,
              right:2,
            }}
          >
            <XAxis dataKey="years" stroke="#000000" fontWeight="bold">
              <Label
                value="Investment Period(in Years)"
                position="bottom"
                offset={-1}
              />
            </XAxis>

            <YAxis stroke="#000000" fontWeight="bold" type="investment">
              <Label
                value="Amount(in Rupees)"
                position="left"
                offset={5}
                angle={270}
              />
            </YAxis>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="investment"
              stroke="#2f50e8"
              r={0}
            />
            <Line
              type="monotone"
              dataKey="sipStepUp"
              stroke="#4822a2"
              r={0}

            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Graph;
