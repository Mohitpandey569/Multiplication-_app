const num1 = Math.ceil(Math.random()*100)
const num2 = Math.ceil(Math.random()*10)

const questionEl =document.getElementById("question");

const inputEl = document.getElementById("input")

const formEl = document.getElementById("form")

questionEl.innerText =`What is ${num1} multiply by ${num2} ?`

const correctAns = num1 * num2;
 

