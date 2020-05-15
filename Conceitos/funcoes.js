function getName()
{
    return "Bruno Sohara"
}

function logFn(fn)
{
    console.log(fn())
}

const logFnResult = logFn;

const obj = 
{
    logFn: logFn
}

const arr = [logfn]

logFnResult(getName)