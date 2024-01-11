
const btnMinus =  document.querySelector('[data-action="minus"]')
const btnPlus =  document.querySelector('[data-action="plus"]')
const counter = document.querySelector('[data-counter_01]')


btnMinus.addEventListener('click', ()=>{
    console.log('click minus')
    if (parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText

    }

})
btnPlus.addEventListener('click', ()=>{
    console.log('click plus')
    counter.innerText = ++counter.innerText
})