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

  const section = document.querySelectorAll("section");
  section.forEach((section) => {
    const inputLabel = section?.querySelector(".input-label");
    const span = section?.querySelector("span");
    const interestLabel = section?.querySelector(".interest-label");
    const errorMsg = section?.querySelector(".error-msg");

    inputLabel?.classList.remove("label-error");
    span?.classList.remove("span-error");
    errorMsg?.classList.add("hidden");
    interestLabel?.classList.add("mb-6", "lg:mb-10");
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

  let isFilled = true;

  inputArea.forEach((input) => {
    const section = input.closest("section");
    const inputLabel = section?.querySelector(".input-label");
    const span = section?.querySelector("span");
    const errorMsg = section?.querySelector(".error-msg");

    if (input.value.trim() === "") {
      isFilled = false;
      inputLabel?.classList.add("label-error");
      span?.classList.add("span-error");
      errorMsg?.classList.remove("hidden");
    } else {
      inputLabel?.classList.remove("label-error");
      span?.classList.remove("span-error");
      errorMsg?.classList.add("hidden");
    }
  });

  const rSection = document.querySelector(".options");
  const errorMsg = rSection?.querySelector(".error-msg");
  const radioSelcted = rSection?.querySelector("input[name = radio]:checked");
  const interestLabel = rSection?.querySelector(".interest-label");

  if (!radioSelcted) {
    errorMsg?.classList.remove("hidden");
    interestLabel?.classList.remove("mb-6", "lg:mb-10");
    interestLabel?.classList.add("mb-3");
  } else {
    errorMsg?.classList.add("hidden");
    interestLabel?.classList.add("mb-6", "lg:mb-10");
    interestLabel?.classList.remove("mb-3");
  }
  const amt = Number(mortgageAmt.value);
  const term = mortgageTerm.value * 12;
  const rate = mortgageRate.value / 12;
});

// const monthlyPay = (amt * rate) / 1 - Math.pow(1 + rate, -term);
// const termPay = monthlyPay * term;

// const monthlyInterest = amt * rate;
// const yearlyInterest = monthlyInterest * term;
