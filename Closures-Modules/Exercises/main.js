// Exercise 1

// const stringFormatter= function (){
// let newStr
// const capitalizeFirst = function(str){
// newStr= str.slice(0,1).toUpperCase() + str.slice(1,str.length).toLowerCase()
//     console.log(newStr);
//     return newStr
// }

// const skewerCase = function (str) {


//     newStr = str.split(' ').join('-')
//     console.log(newStr);
//     return newStr
// }



// return {
//     capitalizeFirst,
//     skewerCase
// }
// }



// const formatter = stringFormatter()

// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box



// Exercise 2
const Bank = function () {
    let balance= 500


    const deposit = function(cash){
balance+=cash

    }

    const showBalance = function () {
        console.log(balance);

    }
 
    return {deposit,showBalance}
}




const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

const myBank = Bank()
myBank.deposit(-200)
myBank.showBalance()