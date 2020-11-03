// let users = []

// const getData = function (display) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         display()
//     }, 3000)

// }
// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)




// const first = function (callback) {
//     setTimeout(function () {
//         console.log("should be first")
//         callback()
//     }, 1000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second)

// const doSomething = function(){
//     console.log("something")
//   }

//   setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds



//   setInterval(function(){
//     console.log(new Date())
//   }, 1000)

// const greet = x => console.log("Hello there"+x)

//   greet('! wiz up')

//   greet(' yo! yo! yo!')

// const square = x => x*x

// console.log(square(4)); 

// const hypotenuse = (a,b)=>Math.sqrt(a*a + b*b)

// console.log(hypotenuse(4,5));
// const getFormalTitle= (fName,lName) => fName+" "+lName

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"




// const normalFunc = function (x) {
//     console.log(x);
    
// }
// const arrowFunc = () => {
//     console.log(this)
//     normalFunc(this)
// }

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: arrowFunc
// }

// suspenseBuilder.displayName()







// const func1= (x)=>{
//     console.log(x);
// }
// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(()=> { //normal function

//             func1(this.name)

//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()

// // Exercise 2
// const getTime = function (alertTime) {
//     alertTime(new Date())
// }

// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
  
//   getTime(returnTime)

// exercise 4

// const add = (a,b,c) => a+b+c

// console.log(add(1,2,3));




// // exercise 5

// const capitalize = str => str.slice(0,1).toUpperCase() + str.slice(1,str.length).toLowerCase()

// console.log(capitalize("bOb"));// returns Bob
// console.log( capitalize("TAYLOR")); // returns Taylor
// console.log(capitalize("feliSHIA") ); // returns Felishia


// Exercise 6

