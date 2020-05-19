let user = 
{
    name: 'Bruno',
    lastname: 'Sohara',
    age: 23,
    address:
    {
        street: 'Rua Antônio Joaquim Viana',
        number: 222,
        neighbor: 'Santa Odila',
        city: 'Campinas',
        state: 'São Paulo',
        country: 'Brazil',
    },
    stats:
    {
        blood: 'O+',
        height: 1.73,
        weight: 78.9,
    }
}

console.log(user)
console.log(user.address.city)
console.log(user.stats.height)

user.name = 'Guilherme'
console.log(user)
user['name'] = 'Guilherme'


const prop = 'name'
user[prop] = 'another name'
console.log[user]

const getProp = prop => {return user[prop]}

user.lastname = 'Cabrini da Silva'
console.log(user)

delete user.name