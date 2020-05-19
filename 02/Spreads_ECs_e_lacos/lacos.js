var i = 0

//For
for (i = 0; i <= 9; i++)
{
    console.log(i)
}

const numbers = ['one', 'two', 'three']

for (let index = 0; index < numbers.length; index++)
{
    const el = numbers[index]
    console.log(`Elemento #${index}: ${el}`)
}

var a = 0
var b = 9

//While
while (a < b)
{
    b++
    a += b
}

console.log(a)

//Do...while
var c = 0
do
{
    c += 1
    console.log(c)
} while(c < 10)

//for...in e for...of
let vetores = [1, 3, 5, 7, 9]
vetores.foo - "hello"

for (let j in vetores)
{
    console.log(j)
}

for (let k of vetores)
{
    console.log(k)
}