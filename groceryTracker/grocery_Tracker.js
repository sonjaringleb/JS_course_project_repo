let grocery1;
let grocery2;
let grocery3;

function calculateTotalAmount(){
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);

    let totalAmount = grocery1 + grocery2 + grocery3;
    let totalAmountRounded = totalAmount.toFixed(2);

    document.getElementById('result').innerText = `The total amount of your groceries is: $ ${totalAmountRounded}`;
}
