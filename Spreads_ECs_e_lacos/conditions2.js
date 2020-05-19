const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

array.forEach(item => {
    if (item % 2 === 0)
    {
        console.log(`O número ${item} é divisível por 2.`)
    }

    else if (item % 3 === 0)
    {
        console.log(`O número ${item} é divisível por 3.`)
    }

    else if (item % 5 === 0)
    {
        console.log(`O número ${item} é divisível por 5.`)
    }

    else
    {
        console.log(`O número ${item} não é divisível por nenhum número.`)
    }
})


//Switch...case
const fruit = 'Abacaxi'

switch(fruit)
{
    case 'Banana':
    case 'Manga':
    case 'Abacaxi':
        console.log(`Preço de ${fruit}: R$ 1,40/kg`)
        break;

    case 'Maçã':
        console.log(`Preço de ${fruit}: R$ 1,90/kg`)
        break;

    case 'Pêra':
        console.log(`Preço de ${fruit}: R$ 2,40/kg`)
        break;
}
