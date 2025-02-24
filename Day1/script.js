let userInput = document.querySelector(".userInput");
let userHelper = document.querySelector(".userHelper");
let emailInput = document.querySelector(".emailInput");
let emailhelper = document.querySelector(".emailhelper");
let passwordInput = document.querySelector(".passwordInput");
let passowrdHelper = document.querySelector(".passowrdHelper");
let submit_btn = document.querySelector(".submit_btn");

console.log(submit_btn);

submit_btn.addEventListener("click", () => {
  if (userInput.value === "") {
    userHelper.style.color = "red";
    userHelper.innerText = "enter your name here...";
    console.log("value is empty");
  } else {
    console.log(userInput.value);
    return;
  }

  if (emailInput === "") {
    emailhelper.innerText = "enter your eamil here....";
    emailhelper.style.color = "red";
  } else {
    console.log(emailInput.value);
  }

  if (passwordInput === "") {
    passowrdHelper.innerText = "Enter your password here...";
    passowrdHelper.style.color = "red";
  } else {
    console.log(passwordInput.value);
  }
});
