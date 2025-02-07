
const submitButton = document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    alert('Thank you for your valuable feedback');

    // put user values into div
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // make invisible div visible
    document.getElementById('userInfo').style.display = 'block';
}

// IIFE
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});

//Alternatives for Event Function

// Function Expression
let keyFunction = function (event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
};

document.addEventListener('keydown', keyFunction);

// Arrow Function
let keyFunction2 = (event) => {
    if (event.key === 'Enter') {
        submitFeedback();
    }
};

// Function Definition
function keyFunction3(event){
    if (event.key === 'Enter') {
        submitFeedback();
    }
}

document.addEventListener('keydown',keyFunction3);

