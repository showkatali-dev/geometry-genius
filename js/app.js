// element selection
const carts = document.querySelectorAll('.cart');
const editBtns = document.querySelectorAll('.editBtn');
const okBtns = document.querySelectorAll('.okBtn');
const btnsCalculate = document.querySelectorAll('.calculateBtn');
const blogBtn = document.querySelector('.blogBtn');


// cart add event listener
for (let cart of carts) {
    cart.addEventListener('mouseover', ()=>{
        let colorCode = colorCodeGenerator();
        cart.style.backgroundColor = `#${colorCode}`;
    });
}


// edit button add event listener
for (let editBtn of editBtns) {
    editBtn.addEventListener('click', ()=>{
        editBtn.closest('.cart').querySelector('.input-field').classList.remove('invisible');
    })
}

// ok button add event listener
for (let okBtn of okBtns) {
    okBtn.addEventListener('click', ()=>{
        const inputs = okBtn.closest('.cart').querySelectorAll('input');
        if (inputs[0].value === '' || inputs[1].value === '') {
            alert('Input field should not be empty')
        } else {
            let firstVal = Number(inputs[0].value);
            let secondVal = Number(inputs[1].value);
            let validation = checkValidation(firstVal, secondVal); 
            if (validation) {
                okBtn.closest('.cart').querySelector('.input-field').classList.add('invisible');
                valueUpdate(okBtn, firstVal, secondVal);
            }
        }
    })
}


// calculate button add event listener
for (let btnCalculate of btnsCalculate) {
    btnCalculate.addEventListener('click', ()=>{
        calculateButtonEvent(btnCalculate);
    })
}

// blog button add event listener
blogBtn.addEventListener('click', ()=>{
    window.location.href = '../blog.html';
})