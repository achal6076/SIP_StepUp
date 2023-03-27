const serviceData = async ({
  monthlyInvestment,
  investmentPeriod,
  rateOfReturn,
  yearlyIncrement,
}) => {
  try {
    let monthlyInvestment = parseInt(monthlyInvestment);
    let investmentPeriod = parseInt(investmentPeriod);
    let rateOfReturn = parseInt(rateOfReturn);
    let yearlyIncrement = parseInt(yearlyIncrement);

    let totalSipWithStepUp = 0,
      cummulationAmount = 0,
      totalInvestmentAmount = 0,
      year, periodInMonth=0;
    
      const graph = [
      {
        years: 0,
        sipStepUp: 0,
        investment: 0,
      },
    ];
    
    rateOfReturn = rateOfReturn / 1200;
    
    for (year = 1; year <= investmentPeriod; year++) {
    
      periodInMonth = year * 12;
    
      for (let i = 1; i <= periodInMonth; i++) {
        if (i !== 1) {
          if (i % 12 == 1) {
            let incrementedAmount = monthlyInvestment * (yearlyIncrement / 100);
            monthlyInvestment += incrementedAmount;
          }
        }

        cummulationAmount = monthlyInvestment * (Math.pow(1 + rateOfReturn, (periodInMonth - i + 1)));
        totalSipWithStepUp += cummulationAmount;
        totalInvestmentAmount += monthlyInvestment*periodInMonth;
      }
      
      const obj = {
        years: year,
        sipStepUp: Math.round(totalSipWithStepUp).toFixed(0),
        totalInvestmentAmount: Math.round(totalInvestmentAmount).toFixed(0),
      };
      
      graph.push(obj);
      
    }
    const graphResult = {
      graph: graph,
      totalSipWithStepUp: totalSipWithStepUp.toFixed(0),
      totalInvestmentAmount: totalInvestmentAmount.toFixed(0),
    };
    
    return graphResult;
  
  } catch (error) {
    res.send(error);
  }
};

module.exports = serviceData;
