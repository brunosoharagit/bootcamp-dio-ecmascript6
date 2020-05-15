const user = 
{
    name: "Bruno",
    lastName: "Sohara"
}

function getUserWithFullName(user)
{
    return
    {
        user
        fullName: `${user.name} ${user.lastName}`
    }
}

const userFullName = getUserWithFullName(user)
console.log(userFullName)