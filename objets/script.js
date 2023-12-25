// exercice 1

let student1 = {
    name : "moi",
    age : 20,
    average : 17
};
console.log("L'édutiant se nomme "+student1.name+", à "+student1.age+" ans et à une moyenne de "+student1.average);

// exercice 2

let student = {
    name : "moi",
    age : 20,
    grades : [12, 14, 8],
    average : 0
};
let sum = 0;
for(let i=0; i<student.grades.length; i++) {
    sum += student.grades[i];
}
student.average = sum / student.grades.length;
console.log("La moyenne est de "+student.average);
console.log(student);

// exercice 3

let students = [
    {
    name : "Steven",
    age : 18,
    average : 10
    },
    {
    name : "Jessica",
    age : 20,
    average : 13
    },
    {
    name : "Charlie",
    age : 17,
    average : 12
    },
];

for (let i = 0; i < students.length; i++) {
    console.log("Voici "+students[i].name+" qui a "+students[i].age+" ans et une moyenne de "+students[i].average);
}