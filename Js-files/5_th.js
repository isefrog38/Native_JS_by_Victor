/*
const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

let number = [1, 2, 5, 8, 102, 22, 56, 90]
let numbers = [1, 2, 5, 8, 102, 22, 56, 90]
let names = ["anton", "valik", "anna", "pavel"]

console.log(names.reverse());
console.log(numbers);

console.log(students.sort((a, b) => b.scores - a.scores));

console.log(students.sort((a, b) => a.name <= b.name ? -1 : 1));

console.log(students.sort((a, b) => {
    return a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1
}));

for (let j = 0; j < number.length - 1; j++) {
    console.log(j)
    let isArraySorted = true
    for (let i = 0; i < number.length - 1 - j; i++) {
        console.log(i)
        if(number[i] > number[i + 1]){
            isArraySorted = false;
            // меняем местами два эл-та массива:
            // let temp = numbers[i + 1]
            // numbers[i + 1] = numbers[i]
            // numbers[i] =  temp
            [number[i + 1], number[i]] = [number[i], number[i + 1]]
        }
    }
    if(isArraySorted)break
}

console.log(number)

for (let i = 0; i < numbers.length - 1; i++) {
    let isArraySorted = true;
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[i] > numbers[i + 1]) {
            isArraySorted = false;
            [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]]
        }
    }
    if (isArraySorted)break
}


console.log(numbers)
*/

