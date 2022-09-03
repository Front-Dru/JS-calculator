//income inputs
const incomeSalary = document.getElementById("income-salary"),
      incomeFreelance = document.getElementById("income-freelace"),
      incomeExtra1 = document.getElementById("income-extra1"),
      incomeExtra2 = document.getElementById("income-extra2");

      //cost inputs
const costsFlat = document.getElementById("costs-flat"),
      costsHouseServise = document.getElementById("costs-house-services"),
      costsTransport = document.getElementById("costs-transport"),
      costsCredit = document.getElementById("costs-credit");

      //total inputs
const totalDayInput = document.getElementById("total-day"),
      totalMonthInput = document.getElementById("total-month"),
      totalYearInput = document.getElementById("total-year");

let totalDay, totalMonth, totalYear;

//money box
const moneyBoxRange = document.getElementById("money-box-range"),
      accumulationInput = document.getElementById("accumulation"),
      spend = document.getElementById("spend");

let accumulation = 0;
let totalPrecents = 0;      