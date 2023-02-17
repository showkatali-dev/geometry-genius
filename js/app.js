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