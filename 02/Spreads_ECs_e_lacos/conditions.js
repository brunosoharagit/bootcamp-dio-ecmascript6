const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.forEach(item => {
    if (item % 2 === 0)
    {
        console.log(`Número ${item} é par.`)
    }

    else
    {
        console.log(`Número ${item} é ímpar.`)
    }
})