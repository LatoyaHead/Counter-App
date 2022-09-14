//1. Create a new variable called 'total' and assign it the div with the id of 'total'
const total = document.getElementById('total')

        //2. Create Six Functions (add, subtract, multiplyBy2, divideBy2, multiplyBy5, divideBy5)
        // Example: 
        // function add(){
          //update the value of the total variable textContent
          // use an alert to alert the user
const addBtn = document.getElementById('add')
const subtractBtn = document.getElementById('subtract')
const multiplyBtn = document.getElementById('mult-2')
const divideBtn = document.getElementById('div-2')
const multiplyBtn1 = document.getElementById('mult-5')
const divideBtn1 = document.getElementById('div-5')

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiplyBy2)
divideBtn.addEventListener('click', divideBy2)
multiplyBtn1.addEventListener('click', multiplyBy5)
divideBtn1.addEventListener('click', divideBy5)

 //3. Attach Functions to Buttons
function add(){
  console.log(total.textContent)
  total.textContent = Number(total.textContent) + 1
  window.alert('Successful Add')
}
function subtract(){
  console.log(total.textContent)
  total.textContent = Number(total.textContent) - 1
  window.alert('Successful Subtract')
}
function multiplyBy2(){
  console.log(total.textContent)
  total.textContent = Number(total.textContent) * 2
  window.alert('Successful Multiply')
}
function divideBy2(){
  console.log(total.textContent)
  total.textContent = Number(total.textContent) / 2
  window.alert('Successful Divide')
}
function multiplyBy5(){
  console.log(total.textContent)
  total.textContent = Number(total.textContent) * 5
  window.alert('Successful Multiply by 5')
}
function divideBy5(){
  console.log(total.textContent)
  total.textContent = Number(total.textContent) / 5
  window.alert('Successful Divide by 5')
}
  
