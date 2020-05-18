function init()
{
    const example = "Essa variável";

    return function()
    {
        console.log(`1 - O valor da variável exemplo é: ${example}`)

        return function()
        {
            console.log(`2 - O valor da variável exemplo é: ${example}`)

            return function()
            {
                console.log(`3 - O valor da variável exemplo é: ${example}`)
            }
        }
    }
}


const initFn1 = init()
const initFn2 = initFn1()
const initFn3 = initFn2()

initFn3()