const path = require("path");
const serviceData = require("../Services/calculator");

const controlData = async (req, res) => {
  try {
    const monthlyInvestment = parseInt(req.query.monthlyInvestment);
    const investmentperiod = parseInt(req.query.investmentPeriod);
    const rateOfReturn = parseInt(req.query.rateOfReturn);
    const yearlyIncrement = parseInt(req.query.yearlyIncrement);

    if (
      monthlyInvestment < 500 ||
      monthlyInvestment > 100000 ||
      investmentperiod < 1 ||
      investmentperiod > 30 ||
      rateOfReturn < 1 ||
      rateOfReturn > 30 ||
      yearlyIncrement < 1 ||
      yearlyIncrement > 12
    ) {
      return res.send({
        status: -1,
        message: "Invalid Inputs",
        fresult: error,
      });
    } else {
      const result = await serviceData(req.query);
      res.send({
        status: 0,
        message: "Request Successful",
        fresult: result,
      });
    }
  } catch (error) {
    res.send({
      status: -1,
      message: "Invalid inputs",
      fresult: error,
    });
  }
};

module.exports = controlData;
