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

const hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
function colorCodeGenerator() {
    let colorCodeArray = [];
    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * (hex.length + 1));
        colorCodeArray.push(hex[randomNum]);
    }

    let colorCode = colorCodeArray.join('');
    return colorCode;
}

const btnsCalculate = document.querySelectorAll('.calculateBtn');

for (let btn of btnsCalculate) {
    btn.addEventListener('click', ()=>{
        buttonEvent(btn);
    })
}

// calculate button event
function buttonEvent(btn) {
    const inputs = btn.closest('.cart').querySelectorAll('input');
    let firstVal = Number(inputs[0].value);
    let secondVal = Number(inputs[1].value);
    if (isNaN(firstVal) || isNaN(secondVal)) {
        alert('Input can not be a string. Please type number.')
    } else if (firstVal <= 0 || secondVal <= 0) {
        alert('Input should be a positive number');
    } else {
    
        if (btn.id == 'btnTriangle') {
            let result = parseFloat((0.5 * firstVal * secondVal).toFixed(2));
            getOutput('Triangle', result);
        } else if (btn.id == 'btnRectangle') {
            let result = parseFloat((firstVal * secondVal).toFixed(2));
            getOutput('Rectangle', result);
        } else if (btn.id == 'btnParallelogram') {
            let result = parseFloat((firstVal * secondVal).toFixed(2));
            getOutput('Parallelogram', result);
        } else if (btn.id == 'btnRhombus') {
            let result = parseFloat((0.5 * firstVal * secondVal).toFixed(2));
            getOutput('Rhombus', result);
        } else if (btn.id == 'btnPentagon') {
            let result = parseFloat((0.5 * firstVal * secondVal).toFixed(2));
            getOutput('Pentagon', result);
        } else if (btn.id == 'btnEllipse') {
            let result = parseFloat((3.14 * firstVal * secondVal).toFixed(2));
            getOutput('Ellipse', result);
        }
    }
}

const lists = document.querySelector('.calculation-list');
function getOutput(name, result) {
    let list = document.createElement('li');
    list.classList.add('mb-6');
    list.innerHTML = `<span>${name}</span><span class="mx-3"><span
    class="result">${result}</span>cm<sup>2</sup></span>
<button
class="convertBtn bg-blue-500 px-2 py-1 rounded-md text-green-100 font-medium hover:bg-blue-600 duration-300">Convert
to
m<sup>2</sup></button><button class="deleteBtn text-xl font-medium text-red-400 align-middle hover:text-red-600 duration-300 ml-3"><i class="fa-solid fa-xmark"></i></button>`;
lists.appendChild(list);
}