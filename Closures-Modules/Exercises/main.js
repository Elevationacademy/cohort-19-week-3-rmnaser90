const stringFormatter= function (){
let newStr
const capitalizeFirst = function(str){
newStr= str.slice(0,1).toUpperCase() + str.slice(1,str.length).toLowerCase()
    console.log(newStr);
    return newStr
}

const skewerCase = function (str) {


    newStr = str.split(' ').join('-')
    console.log(newStr);
    return newStr
}



return {
    capitalizeFirst,
    skewerCase
}
}



const formatter = stringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box