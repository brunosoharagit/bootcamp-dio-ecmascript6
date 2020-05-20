//Array.of
const arr = Array.of(1, 2, 3)
console.log(arr)

const stringArr = Array.of('John', 'Rebecca', 'Jared')
console.log(stringArr)

//Array.push
const fruits = ['Melancia', 'Maçã']
const newFruits = fruits.push('Laranja')

console.log(newFruits)

console.log(fruits)

//Array.pop
const meats = ['Picanha', 'Bife', 'Costela', 'Tomate']
const removedItem = meats.pop()

console.log(removedItem)
console.log(meats)

//Array.unshift
const arrays = ['banana', 'melancia', 'abacate']
const arrLength = arrays.unshift('abacate')

console.log(arrLength)
console.log(arrays)

//Array.concat
const salgados = ['coxinha', 'kibe', 'esfiha']
const doces = ['bolinhos', 'donuts', 'cupcakes']

const lanches = doces.concat(salgados)
console.log(lanches)

//Array.slice
const list = [1, 2, 3, 4, 5]

list.slice(0, 2)
list.slice(2)
list.slice(-1)
list.slice(-3)

//Array.splice
const lists = [1, 2, 3, 4, 5]

lists.splice(2)
console.log(lists)

lists.splice[0, 0, 'first']
console.log(lists)