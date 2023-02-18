// color code generator
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

// value update function
function valueUpdate(element, firstVal, secondVal) {
    element.closest('.cart').querySelector('.value1').innerText = firstVal;
    element.closest('.cart').querySelector('.value2').innerText = secondVal;
}


// calculate button function
function calculateButtonEvent(btn) {
    const inputs = btn.closest('.cart').querySelectorAll('input');
    let firstVal = Number(inputs[0].value);
    let secondVal = Number(inputs[1].value);
    let validation = checkValidation(firstVal, secondVal);

    if (validation) {
        valueUpdate(btn, firstVal, secondVal);
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

// validation check function
function checkValidation(firstVal, secondVal) {
    if (firstVal === '' || secondVal === '') {
        alert('Input field can not be empty');
        return false;
    } else if (isNaN(firstVal) || isNaN(secondVal)) {
        alert('Input value can not be a string. Please type number.')
        return false;
    } else if (firstVal <= 0 || secondVal <= 0) {
        alert('Input value should be a positive number');
        return false;
    } else {
        return true;
    }
}


// get output function
const lists = document.querySelector('.calculation-list');
function getOutput(name, result) {
    let list = document.createElement('li');
    list.classList.add('text-sm');
    list.classList.add('mb-6');
    let meter = parseFloat((result / 10000).toFixed(4));

list.innerHTML = `<span>${name}</span><span class="mx-3 result">${result}cm<sup>2</sup></span>
<button
class="convertBtn bg-blue-500 px-2 py-1 rounded-md text-green-100 font-medium hover:bg-blue-600 duration-300">Convert
to
m<sup>2</sup></button><button class="deleteBtn text-xl font-medium text-red-400 align-middle hover:text-red-600 duration-300 ml-3"><i class="fa-solid fa-xmark"></i></button>`;

lists.appendChild(list);

// delete button add event listener
list.querySelector('.deleteBtn').addEventListener('click', ()=> {
    lists.removeChild(list);
});


// convertButton add event listener
let convertToM = true;
let resultValue = list.querySelector('.result');
let convertBtn = list.querySelector('.convertBtn');
convertBtn.addEventListener('click', ()=>{
    if (convertToM) {
        resultValue.innerHTML = `${meter}m<sup>2</sup>`;
        convertBtn.innerHTML = `Convert to cm<sup>2</sup>`;
        convertToM = false;
    } else {
        resultValue.innerHTML = `${result}cm<sup>2</sup>`;
        convertBtn.innerHTML =`Convert to m<sup>2</sup>`;
        convertToM = true;
    }
})
}