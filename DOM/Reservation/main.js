
const container=document.getElementById('container')
const message=document.getElementById('message')
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }


        const checkResrvation = function () {
            
            let name = document.getElementById('name').value.toLowerCase();
            let result=""
            if(reservations[name]){
                if (!reservations[name].claimed) {
                result= "welcome, "+name
                reservations[name].claimed= true;
                }else{
                    result = "someone claimed you reservation"+name
                }
            
            
            }else{
            
                result="there's no reservation under the name "+name
            
                reservations[name]={claimed: true}
                console.log(reservations);
            }

            message.innerHTML=result;

}


