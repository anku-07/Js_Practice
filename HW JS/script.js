console.log("Heelllo");

const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const leargest_num = document.querySelector(".leargest_num");

leargest_num.addEventListener("click", () => {
  let convertNum1 = num1.value;
  let convertNum2 = num2.value;
  let convertNum3 = num3.value;

  function leargestNum(a, b, c) {
    if (a >= b && a >= c) {
      alert(`${a} is the largest:`);
      return;
    } else if (b >= a && b >= c) {
      alert(`${b} is the largest:`);
    } else {
      alert(`${c} is the largest:`);
    }
  }

  if (isNaN(convertNum1) || isNaN(convertNum2) || isNaN(convertNum3)) {
    alert("Enter only number each input");
    return;
  } else {
    leargestNum(convertNum1, convertNum2, convertNum3);
  }
});

const numberInput = document.querySelector(".numberInput");
const check_btn = document.querySelector(".check_btn");

check_btn.addEventListener("click", () => {
  if (numberInput.value % 2 === 0) {
    alert(`${numberInput.value} is an even number`);
  } else {
    alert(`${numberInput.value} is an odd number`);
  }
});

// Write a function filterEvenNumbers(arr, callback) that filters even numbers from an array using a callback function.

function filterEvenNumbers(arr) {
  let filteredArr = arr.filter((num) => num % 2 == 0);

  return filteredArr;
}

let myArr = [2, 3, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(myArr));
