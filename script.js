"use script";
const clearBtn = document.getElementById("clear-btn");
const mortgageAmt = document.getElementById("m-amt");
const mortgageTerm = document.getElementById("m-term");
const mortgageRate = document.getElementById("rate");
const repaymentOptn = document.getElementById("repayment");
const interestOptn = document.getElementById("interest");
const calculateBtn = document.getElementById("calculate");
const startSec = document.getElementById("start");
const endSec = document.getElementById("end");
const monthlyAmt = document.getElementById("monthly-pay").textContent;
const yearlyAmt = document.getElementById("total-pay").textContent;
const userForm = document.getElementById("user-form");
const interestLabel = document.querySelector(".interest-label");

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

mortgageAmt.addEventListener("input", (e) => {
  const value = e.target.value.replace(/,/g, "").replace(/\D/g, "");
  const formattedValue = Intl.NumberFormat("en-US").format(value);
  e.target.value = formattedValue;
});

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputArea = document.querySelectorAll("input");
  const inputLabel = document.querySelectorAll(".input-label");
  const span = document.querySelectorAll("span");
  const errorMsg = document.querySelectorAll(".error-msg");
  console.log(errorMsg);
  let isFilled = true;

  inputArea.forEach((input) => {
    input.value.trim() === "" ? (isFilled = false) : "";
  });

  if (!isFilled) {
    inputLabel.forEach((label) => {
      label.classList.add("label-error");
    });

    span.forEach((span) => {
      span.classList.add("span-error");
    });

    errorMsg.forEach((error) => {
      error.classList.remove("hidden");
    });

    interestLabel.classList.contains("mb-6")
      ? interestLabel.classList.remove("mb-6")
      : interestLabel.classList.remove("mb-10");

    interestLabel.classList.add("mb-2");
  } else {
    inputLabel.forEach((label) => {
      label.classList.remove("label-error");
    });

    span.forEach((span) => {
      span.classList.remove("span-error");
    });

    errorMsg.forEach((error) => {
      error.classList.add("hidden");
    });

    !interestLabel.classList.contains("mb-6")
      ? interestLabel.classList.add("mb-6")
      : interestLabel.classList.add("mb-10");

    interestLabel.classList.remove("mb-2");

    const amt = Number(mortgageAmt.value);
    const term = mortgageTerm.value * 12;
    const rate = mortgageRate.value / 12;
  }
});

const monthlyPay = (amt * rate) / 1 - Math.pow(1 + rate, -term);
const termPay = monthlyPay * term;

const monthlyInterest = amt * rate;
const yearlyInterest = monthlyInterest * term;
