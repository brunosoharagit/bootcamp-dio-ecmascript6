const users = ['Bruno', 'Guilherme', 'Jeniffer']

const gender = 
{
    WOMAN: Symbol('W'),
    MAN: Symbol('M')
}

const people = 
[
    {name: 'Bruno', age: 23, gender: gender.MAN},
    {name: 'Gulherme', age: 26, gender: gender.MAN},
    {name: 'Jeniffer', age: 29, gender: gender.WOMAN}
]

console.log('Usuários: ', people.length)
console.log('A variável "persons" é uma array:', Array.isArray(people))

const men = people.filter(people => people.gender === gender.MAN)
console.log('\nLista de Homens presentes:', men)

const women = people.filter(people => people.gender === gender.WOMAN)
console.log('\nLista de mulheres presentes:', women)

const presonsWithCourse = people.map(people => {
    people.course = 'Introdução ao Javascript'
    return people
})

console.log('\nPessoas com adição do course:', presonsWithCourse)

const totalAge = people.reduce((age, people) => {
    age += people.age
    return age
}, 0)

console.log('\nSoma de idade das pessoas:', totalAge)

const totalEvenAges = people.filter(people => people.age %2 === 0)
                      .reduce((age, people) => {
                          age += people.age
                          return age
                      }, 0)

console.log('\nSoma de idades das pessoas que possuem idade par:', totalEvenAges)