function fn()
{
    return 'Code here'
}

fn.prop = 'posso criar funcções.'

console.log(fn())
console.log(fn.prop)

const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())

logFnResult(fn)

const controlFnExecution = fnParam => allowed => 
{
    if (allowed)
    {
        fnParam()
    }
}

const handleFnExecution = controlFnExecution(fn)

handleFnExecution(true)
handleFnExecution()

function controlFnExec(fnParam)
{
    return function(allowed)
    {
        if (allowed)
        {
            fnParam()
        }
    }
}