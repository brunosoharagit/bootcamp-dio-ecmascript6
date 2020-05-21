//Array.forEach()
const fruits = ['Melancia', 'Maca', 'Banana', 'Figo', 'Tomate']

fruits.forEach((index, fruit) => {
    console.log(`${index}: ${fruit}`)
});

console.log()
//Array.map
const numbers = [1, 2, 3, 4, 5]
const double = numbers.map(value => value * 2)

console.log(double)

const newList = fruits.map((fruits, index) => `${index}: ${fruits}`)
console.log(newList)

console.log()
//Array.flat
const ages = [45, 55, 34, 29 [56, 99]]
ages.flat()

console.log(ages)

console.log()
//Array.flatMap
const arreis = [1, 2, 3, 4]

arreis.flatMap(value => [value * 2]);
arreis.flatMap(value =>[[value * 3]]);

//Array.keys
const arrei = [1, 2, 3, 4]

const arreiIterator = arrei.keys()

arreiIterator.next()
arreiIterator.next()
arreiIterator.next()

console.log()
//Array.entries
console.log(fruits)


const friutsIterator = fruits.entries()

console.log(friutsIterator.next())
console.log(friutsIterator.next())
console.log(friutsIterator.next())
console.log(friutsIterator.next())
console.log(friutsIterator.next())
console.log(friutsIterator.next())
console.log(friutsIterator.next())

console.log()
//Array.find
const lista = [1, 2, 3, 4, 5, 6, 7]

const numMaiorQue2 = lista.find(valor => valor > 2)
console.log(numMaiorQue2)

console.log()
//Array.findIndex
const indexNumMaiorQue2 = lista.findIndex(valor => valor > 2)
console.log(indexNumMaiorQue2)

console.log()
//Array.filter
const filtraNumMaioresQue2 = lista.filter(valor => valor > 2)
console.log(filtraNumMaioresQue2)

console.log()
//Array.indexOf
const fries = ['batata frita', 'frango frito', 'mandioca frita', 'polenta frita']

const indexItem = fries.indexOf('batata frita')
console.log(indexItem)

console.log()
//Array.lastIndexOf
const lastIndexItem = fries.lastIndexOf('batata frita')
console.log(lastIndexItem)

console.log()
//Array.includes
const listIncludesItem = fries.includes('batata frita')
const listIncludesItem2 = fries.includes('udon frito')

console.log(listIncludesItem)
console.log(listIncludesItem2)

console.log()
//Array.some - função semelhante ao 'OR'
const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const numbersDividedBy2 = numbers2.some(value => value % 2 === 0)

console.log(numbersDividedBy2)

const users2 = 
[
    {name: 'Boris', grade: 5},
    {name: 'Kyle', grade: 9},
    {name: 'Edgar', grade: 8},
    {name: 'Gabe', grade: 4}
]

const hasTheStudent = users2.some(student => student.grade > 10)
console.log(hasTheStudent)

console.log()
//Array.every - função semelhante ao 'AND'
const numbers3 = [0, 2, 4, 6, 9]
const allEvents = numbers3.every(value => value % 2 === 0)
console.log(allEvents)

const approved4NextGrade = users2.every(student => student.grade >= 6)
console.log(approved4NextGrade)

console.log()
//Array.sort
const sortStudent = users2.sort((current, next) => current.grade - next.grade)
console.log(sortStudent)