const phone=document.getElementById('phone')
const name = document.getElementById('name')
const salary = document.getElementById('salary')
const birthday = document.getElementById('birthday')
const message = document.getElementById('message')
const btn = document.getElementById('btn')
const container= document.getElementById('container')
const welcome= document.getElementById('welcome')
btn.addEventListener("click", function(event){
    
    event.preventDefault()
let isCorrectDetails=true
if (name.value.length<2) {
    isCorrectDetails=false
    message.innerHTML+='name should be more thatn 2 characters, '
}
if (salary.value<10000 || salary.value>16000) {
    isCorrectDetails=false
    message.innerHTML+= " Salary must be between 10,000 and 16,000, "
}

if(!(birthday.value)){
    isCorrectDetails=false
    message.innerHTML+="Birthday missing, "
}

if (phone.value.length!=10) {
    isCorrectDetails=false
    message.innerHTML+= "wrong phone Number, "
    
}

if ( isCorrectDetails ) {
    

container.classList.add('hide')
welcome.innerHTML=`welcome ${name.value}`
welcome.classList.remove('hide')

}



console.log(birthday.value);


    
});