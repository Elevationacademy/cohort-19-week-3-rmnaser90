// const family = function () {
//     let members=[]
//     const birth = function (name) {
        
//         members.push(name)

//         console.log(members);
//     }

// return birth

// }

// const giveBirth=family()
// giveBirth('rami')
// giveBirth('ahmad')
// giveBirth('zein')

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }

//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }

// const math = mathOperations()
// console.log(math.mult(7,math.div(36,6)));



const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
            
        }
        console.log("________________");
    }

    return {
        addUser,
        listUsers
    }
}

const usersModule = UsersModule()
usersModule.addUser('Narkis')

const newUsers= UsersModule()
newUsers.addUser('sameer')

const newerUsers= UsersModule()
newerUsers.addUser('Hafsah')



usersModule.listUsers()
newUsers.listUsers()
newerUsers.listUsers()
