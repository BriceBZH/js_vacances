// exercice 1
function add(a, b) {
    let somme = Number(a) + Number(b);
    return somme;
}

function sub(a, b) {
    let dif = a - b;
    return dif;
}

function mult (a, b) {
    let produit = a * b;
    return produit;
}

function div (a, b) {
    let quo = a / b;
    return quo;
}

function mod (a, b) {
    let reste = a % b;
    return reste;
}

console.log(add(21, 21)); // doit afficher 42
console.log(sub(63, 21)); // doit afficher 42
console.log(mult(21, 2)); // doit afficher 42
console.log(div(84, 2)); // doit afficher 42
console.log(mod(42, 2)); // doit afficher 0

//exercice 2

function askUserOperation() {
    let operateur = prompt("Entrez un opérateur");
    return operateur;
}

function askUserFirstNumber() {
    let firstNumber = prompt("Donnez un 1er nombre ?");
    return firstNumber;
}

function askUserSecondNumber() {
    let secondNumber = prompt("Donnez un 2ème nombre ?");
    return secondNumber;
}

// exercice 3

function calculator () {
    let operateur = askUserOperation();
    let firstNumber = askUserFirstNumber();
    let secondNumber = askUserSecondNumber();
    if(operateur === "+") {
        console.log(add(firstNumber, secondNumber));
    } else if(operateur === "-") {
        console.log(sub(firstNumber, secondNumber));
    } else if(operateur === "*") {
        console.log(mult(firstNumber, secondNumber));
    } else if(operateur === "/") {
        console.log(div(firstNumber, secondNumber));
    } else if(operateur === "%") {
        console.log(mod(firstNumber, secondNumber));
    }
}

calculator();