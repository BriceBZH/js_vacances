// exercice 1
let animals = ["Dog", "Cat", "Spider", "Bat", "Snake", "Bear"]; 

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

let gods = ["Zeus", "Persephone", "Dyonisos", "Artemis", "Ares"];

for (const variable of gods) {
    console.log(variable);
}

// exercice 2

let animals_even = ["Dog", "Cat", "Spider"];
for (let i = 0; i < animals_even.length; i++) {
    if(i % 2 === 0) {
        console.log(animals_even[i]);
    }   
}

let animals_odd = ["Bat", "Snake", "Bear"];
for (let i = 0; i < animals_odd.length; i++) {
    if(i % 2 !== 0) {
        console.log(animals_odd[i]);
    }   
}

// exercice 3

let numbers = [10, 11, 15, 6];
let sum = 0;

for(let i = 0; i< numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// exercice 4

let grades = [[20, 10], [15, 20], [13, 18]];


for(let i = 0; i< grades.length; i++) {
    let average = 0;
    for(let j = 0; j< grades[i].length; j++) {
        average += grades[i][j];
        
    }
    console.log(average / grades[i].length);
}