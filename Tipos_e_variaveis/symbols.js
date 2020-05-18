const nameSymb1 = Symbol('name')
const nameSymb2 = Symbol('name')

const user = 
{
    [nameSymb1]: 'Bruno',
    [nameSymb2]: 'Yoshihiro',
    lastname: 'Sohara'
}

console.log(user)

for (const key in user)
{
    if (user.hasOwnProperty(key))
    {
        console.log(`\nValor da chave: ${key}: ${user[key]}`)
    }
}

console.log('Propriedades do objeto user: ', Object.keys(user))
console.log('Valores das propriedades do objeto user: ', Object.values(user))

const direction = 
{
    UP: Symbol('Up'),
    DOWN: Symbol('Down'),
    LEFT: Symbol('Left'),
    RIGHT: Symbol('Right')
}