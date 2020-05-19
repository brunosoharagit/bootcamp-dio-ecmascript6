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