const carts = document.querySelectorAll('.cart');

for (let cart of carts) {
    cart.addEventListener('mouseover', (event)=>{
        let colorCode = colorCodeGenerator();
        cart.style.backgroundColor = `#${colorCode}`;
        event.target.addEventListener('mouseover', (e)=>{
            cart.style.backgroundColor = `#${colorCode}`;
        })

    });
    cart.addEventListener('mouseout', ()=>{
        cart.style.backgroundColor = 'inherit';
    })

}


// edit button add event listener
const editBtns = document.querySelectorAll('.editBtn');
for (let editBtn of editBtns) {
    editBtn.addEventListener('click', ()=>{
        editBtn.closest('.cart').querySelector('.input-field').classList.remove('invisible');
    })
}

// ok button add event listener
const okBtns = document.querySelectorAll('.okBtn');
for (let okBtn of okBtns) {
    okBtn.addEventListener('click', ()=>{
        const inputs = okBtn.closest('.cart').querySelectorAll('input');
        let firstVal = Number(inputs[0].value);
        let secondVal = Number(inputs[1].value);
        let validation = checkValidation(firstVal, secondVal); 
        if (validation) {
            okBtn.closest('.cart').querySelector('.input-field').classList.add('invisible');
            valueUpdate(okBtn, firstVal, secondVal);
        }
    })
}


// calculate button add event listener
const btnsCalculate = document.querySelectorAll('.calculateBtn');
for (let btnCalculate of btnsCalculate) {
    btnCalculate.addEventListener('click', ()=>{
        calculateButtonEvent(btnCalculate);
    })
}