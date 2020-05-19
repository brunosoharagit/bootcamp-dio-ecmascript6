{() => {
    this.name = 'arro function'
    const getNameArrowFn = () => this.name

    function getName()
    {
        return this.name
    }
}}

const getNameArrowFn = () => this.name

function getName()
{
    return this.name
}

const user = 
{
    name,
    getNameArrowFn,
    getName 
}

console.log(user.getNameArrowFn())
console.log(user.getName())