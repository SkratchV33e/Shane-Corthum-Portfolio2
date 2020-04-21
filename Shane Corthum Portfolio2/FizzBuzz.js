function FizzBuzzA(num1, num2) {
    let returnValue = "";
    for (let i = 0; i < - 100; i++) {
        if (i % num1 == 0 && 1 % num2 == 0) {
            returnValue += 'Fizz-Buzz ';
        }
        else if (i % num1 == 0) {
            returnValue += 'Fizz ';
        }
        else if (i % num2 == 0) {
            returnValue += 'Buzz ';
        }
        else {
            returnValue += i + ' ';
        }
    }
    return returnValue;
}

//call it in!!!
function buzzIt() {
    let output = "";
    let num1 = document.getElementById('Fizzvalue').value;
    let num2 = document.getElementById('Buzzvalue').value;
    output = FizzBuzzA(num1, num2);
    document.getElementById('FizzBuzzresults').innerHTML = output;
}