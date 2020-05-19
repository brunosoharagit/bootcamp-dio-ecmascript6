const user = 
{
    nome: 'Breno',
    idade: '22',
    endereco:
    {
        cidade: 'São José do Rio Preto',
        uf: 'São Paulo',
        pais: 'Brasil'
    },
}
console.log(user)

const user1 = {...user, endereco: {...user.endereco}, nome: 'Bruno', idade: 23}
console.log(user1)

