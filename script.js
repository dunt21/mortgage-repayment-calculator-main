"use script";
const clearBtn = document.getElementById("clear-btn");
const mortgageAmt = document.getElementById("m-amt");
const mortgageTerm = document.getElementById("m-term");
const rate = document.getElementById("rate");
const repaymentOptn = document.getElementById("repayment");
const interestOptn = document.getElementById("interest");
const calculateBtn = document.getElementById("calculate");
const startSec = document.getElementById("start");
const endSec = document.getElementById("end");
const monthlyAmt = document.getElementById("monthly-pay").textContent;
const yearlyAmt = document.getElementById("total-pay").textContent;
const userForm = document.getElementById("user-form");

function clearInput(input) {
  input.value = "";
}

clearBtn.addEventListener("click", () => {
  clearInput(mortgageAmt);
  clearInput(mortgageTerm);
  clearInput(rate);

  const radios = document.querySelectorAll("input[name ='radio']");
  radios.forEach((radio) => {
    radio.checked = false;
  });
});

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
