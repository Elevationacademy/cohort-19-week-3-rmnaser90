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



// // Exercise 2
// const Bank = function () {
//     let balance= 500


//     const deposit = function(cash){
// balance+=cash

//     }

//     const showBalance = function () {
//         console.log(balance);

//     }

//     return {deposit,showBalance}
// }




// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950

// const myBank = Bank()
// myBank.deposit(-200)
// myBank.showBalance()

// Exercise 3

const SongsManager = function () {
    let songs = {}

    const addSong = function (name, url) {
        let URL = url.split('=')[1]
        songs[name] = URL
    }
    const getSong = function (name) {

        console.log("https://www.youtube.com/watch?v="+songs[name]);
    }

return {addSong,getSong}
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ