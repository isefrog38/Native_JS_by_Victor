/*const num1 = 6;
const num2 = 6;

console.log(num1 === num2) //true

const friends = [
    "Mary",
    "Alex",
    "Bob"
]
const greetins = friends.map(f => `Hi! My name is ${f}`);
console.log(greetins)*/

/*const student = [
    {
        name: "Bob",
        age: 19,
        isMarried: false,
        scores: 10
    },
    {
        name: "Steve",
        age: 22,
        isMarried: false,
        scores: 100
    },
    {
        name: "Alex",
        age: 64,
        isMarried: true,
        scores: 86
    },
    {
        name: "John",
        age: 45,
        isMarried: true,
        scores: 67
    }
]*/

/*const studentssss = student.map(f => `Hi! My name is ${f.name}`);
console.log(studentssss)

const copyStudent = student.map(s => s);     // Поверхностная копия
const deepCopyStudent = student.map(s => {   //Глубокая копия
    return {...s}
});
console.log(student.find(s => s.name === "Bob"));
console.log(myFind(student, s => s.name === "Bob"));

function myFind(array , callBack) {
    for(let i = 0; i < array.length; i ++){
        if (callBack(array[i])) {
            return array[i];
        }
    }
}*/

const filterAge = student.filter( s => s.age >= 25 );
console.log(filterAge)

const findScores = student.find( s => s.scores >= 50 && s.isMarried );
console.log(findScores)
