
const billInput = document.querySelector('#bill-input');
const numbPerson = document.querySelector('#number-person-input');
const selectTip = document.querySelectorAll('.tip-percent');
const customTip = document.querySelector('.input-custom ')
const resetBtn = document.querySelector('#reset-btn');
const tipAmount = document.querySelector('.total-actual-amount');
const totalAmount = document.querySelector('.tip-actual-amount');
const fivePercent = document.getElementById('five')
const tenPercent = document.getElementById('ten')
const fifteenPercent = document.getElementById('fifteen')
const twentyFivePercent = document.getElementById('twentyfive')
const fiftyPercent = document.getElementById('fifty')
const numberOfPersons = document.querySelectorAll('.number-person-img')
const errors = document.getElementById('error')









resetBtn.addEventListener('click', (event)=>{
    billInput.value = 0
    numbPerson.value = 1
    tipAmount. innerHTML = '$0'
    totalAmount. innerHTML = '$0'
    customTip.value = ''
    selectTip.forEach((tipBtn ) => {
        tipBtn.classList.remove('active')
    })
    selectTip[2].classList.add('active')
    errors.style.display = 'none'
    numbPerson.style.border = 'none'

})
fivePercent.addEventListener('click',(event)=>{
    let result = parseFloat((billInput.value * (5/100)).toFixed(2))
    let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
   let totalResult = Number(billInput.value) + result
    let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
    console.log(result)
    console.log(resultPerPerson)
    console.log(totalResult)
    console.log(totalResultPerPerson)
    tipAmount.innerText = `$${totalResultPerPerson}`
    totalAmount.innerText = `$${resultPerPerson}`

    validateInputs();
})
function validateInputs (){
    if(numbPerson.value == 0 || numbPerson.value == ''){
        console.log('Try Again')
        errors.style.display = 'block'
        tipAmount.innerText = `$0.0`
        totalAmount.innerText = `$0.0`
        numbPerson.style.border = '1px solid red'

    }else if(numbPerson.value > 0){
        errors.style.display = 'none'
        numbPerson.style.border = 'none'
    }
}
const setError = (element, message) => {
    const numberOfPersons = element.parentElement;
    const errorDisplay = numberOfPersons.querySelector('error')

    errorDisplay.innerText = message;
    numberOfPersons.classList.add('error')
}



tenPercent.addEventListener('click',(event)=>{
    let result = parseFloat((billInput.value * (10/100)).toFixed(2))
    let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
   let totalResult = Number(billInput.value) + result
    let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
    console.log(result)
    console.log(resultPerPerson)
    console.log(totalResult)
    console.log(totalResultPerPerson)
    tipAmount.innerText = `$${totalResultPerPerson}`
    totalAmount.innerText = `$${resultPerPerson}`
    validateInputs();
})


fifteenPercent.addEventListener('click',(event)=>{
    let result = parseFloat((billInput.value * (15/100)).toFixed(2))
    let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
   let totalResult = Number(billInput.value) + result
    let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
    console.log(result)
    console.log(resultPerPerson)
    console.log(totalResult)
    console.log(totalResultPerPerson)
    tipAmount.innerText = `$${totalResultPerPerson}`
    totalAmount.innerText = `$${resultPerPerson}`
    validateInputs();
})

twentyFivePercent.addEventListener('click',(event)=>{
    let result = parseFloat((billInput.value * (25/100)).toFixed(2))
    let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
   let totalResult = Number(billInput.value) + result
    let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
    console.log(result)
    console.log(resultPerPerson)
    console.log(totalResult)
    console.log(totalResultPerPerson)
    tipAmount.innerText = `$${totalResultPerPerson}`
    totalAmount.innerText = `$${resultPerPerson}`
    validateInputs();
})

fiftyPercent.addEventListener('click',(event)=>{
    let result = parseFloat((billInput.value * (50/100)).toFixed(2))
    let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
   let totalResult = Number(billInput.value) + result
    let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
    console.log(result)
    console.log(resultPerPerson)
    console.log(totalResult)
    console.log(totalResultPerPerson)
    tipAmount.innerText = `$${totalResultPerPerson}`
    totalAmount.innerText = `$${resultPerPerson}`
    validateInputs();
})
customTip.addEventListener('keyup', (event)=>{
    console.log(customTip.value)
    let result = parseFloat((billInput.value * ((customTip.value)/100)).toFixed(2))
    let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
   let totalResult = Number(billInput.value) + result
    let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
    console.log(result)
    console.log(resultPerPerson)
    console.log(totalResult)
    console.log(totalResultPerPerson)
    tipAmount.innerText = `$${totalResultPerPerson}`
    totalAmount.innerText = `$${resultPerPerson}`
    validateInputs();
})




numbPerson.addEventListener('keyup',(event)=>{
    if(customTip.value > 0){
        console.log(customTip.value)
        let result = parseFloat((billInput.value * ((customTip.value)/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }else if(fivePercent.classList.contains('active')){
        let result = parseFloat((billInput.value * (5/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }else if(tenPercent.classList.contains('active')){
        let result = parseFloat((billInput.value * (10/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }else if(fifteenPercent.classList.contains('active')){
        let result = parseFloat((billInput.value * (15/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }else if(twentyFivePercent.classList.contains('active')){
        let result = parseFloat((billInput.value * (25/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }
    else if(fiftyPercent.classList.contains('active')){
        let result = parseFloat((billInput.value * (50/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }
    validateInputs();
})
billInput.addEventListener('keyup',(event)=>{
    if(customTip.value > 0){
        console.log(customTip.value)
        let result = parseFloat((billInput.value * ((customTip.value)/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }else if(fivePercent.classList.contains('active')){
        let result = parseFloat((billInput.value * (5/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }else if(tenPercent.classList.contains('active')){
        let result = parseFloat((billInput.value * (10/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }else if(fifteenPercent.classList.contains('active')){
        let result = parseFloat((billInput.value * (15/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }else if(twentyFivePercent.classList.contains('active')){
        let result = parseFloat((billInput.value * (25/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }
    else if(fiftyPercent.classList.contains('active')){
        let result = parseFloat((billInput.value * (50/100)).toFixed(2))
        let resultPerPerson = parseFloat((result/numbPerson.value).toFixed(2))
       let totalResult = Number(billInput.value) + result
        let totalResultPerPerson = parseFloat((totalResult / numbPerson.value).toFixed(2))
        console.log(result)
        console.log(resultPerPerson)
        console.log(totalResult)
        console.log(totalResultPerPerson)
        tipAmount.innerText = `$${totalResultPerPerson}`
        totalAmount.innerText = `$${resultPerPerson}`
    }
    billInput.style.border = '2px solid var(--Strong-cyan)'
    validateInputs();
})






selectTip.forEach((btn) =>{
    btn.addEventListener('click',(event)=>{
        selectTip.forEach((tipBtn ) => {
            tipBtn.classList.remove('active')
        })
        if(event.target.classList.contains('input-custom')){
            event.target.classList.add('active')
        }else{
            event.target.classList.add('active')
        }
    })
})

billInput.addEventListener('keyup',(event)=>{
    calculateTip()
})
function warning() {
    if(numbPerson.value === '' && numbPerson.value === 0){
        numberOfPersons.classList.add('.Error')
    }
}
warning()
const calculateTip = () =>{
    const billvalue = parseFloat(billInput.value);
    const numberOfPersonvalue = parseFloat(numbPerson.value);
    const customTippercent = document.querySelector('tip-percent-custom.active');
    let tipPercentage = (document.querySelector('tip-percent.active').value) 

    if(customTippercent){
        tipPercentage =parseFloat(document.querySelector('.input-custom '))
    }
    const totalAmount = (tipPercentage/100) * billvalue.toFixed[2];
    console.log(totalAmount)
}