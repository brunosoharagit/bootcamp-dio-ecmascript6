//Array.forEach()
const fruits = ['Melancia', 'Maca', 'Banana', 'Figo', 'Tomate']

fruits.forEach((index, fruits) => {
    console.log(`${fruits}: ${index}`)
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

const newAges = ages.flat(2)
console.log(newAges)

//Array.flatMap