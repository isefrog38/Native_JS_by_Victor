/*const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
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
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}


console.log(user === copyUser)  // false
console.log(user.friends === copyUser.friends) //true

//2. Полная (глубокая) копия объекта user
/!*let deepCopyUser = JSON.parse(JSON.stringify(copyUser));*!/
let deepCopyUser={...user,friends:[...user.friends]}


console.log(user === deepCopyUser) //false
console.log(user.friends === deepCopyUser.friends)  // false

//3. Поверхностная копия массива students
let copyStudents = [...students]

//Проверка:
console.log(students === copyStudents ) // false
console.log(students[0] === copyStudents[0]) // true

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = copyStudents.map(el => ({...el}))

//Проверка:
console.log(students === deepCopyStudents ) // false
console.log(students[0] === deepCopyStudents[0]) // false

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents].sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a,b) => a.scores > b.scores ? -1 : 1)
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(v => v.scores >= 100)
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = [...deepCopyStudents.splice(0, 3)];

console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
/!*let newDeepCopyStudents = topStudents.concat(deepCopyStudents)*!/
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(v  => !v.isMarried )
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = newDeepCopyStudents.map(el => el.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join(" ")
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(", ")
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = newDeepCopyStudents.map(el => ({...el, isStudent: true}) )
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(el => el.name === "Nick" ? {...el, isMarried: true} : el)
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = newDeepCopyStudents.find(v => v.name === "Ann")
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = newDeepCopyStudents.reduce((a,b) => a < b ? b : a)
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!b

let scoresSum = newDeepCopyStudents.reduce((sum,el) => sum + el.scores , 0)
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    let array = students.map(v => v.name )
        console.log(array)
   let res = students.map(el => (
       {...el, friends:[...array.filter(v => v !== el.name)]}))
    return res
}
console.log(addFriends(students));


// not my (AZAMAT)
/!*const addFriends = (students) => {
    return students.map(s => (
            {...s, friends: students.filter(f => f.name !== s.name)}
        )
    )
}
console.log(addFriends(students));*!/*/

/*function factorial (n) {
    if (n === 1) return 1;
    return n * factorial(n - 1)
}
console.log(factorial(5))*/





