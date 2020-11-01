// Exercise 1 done

const playingField = document.getElementById("playing-field")
const down =document.getElementById('down')
const up =document.getElementById('up')
const left =document.getElementById('left')
const right =document.getElementById('right')
const ball=document.getElementById('block')
playingField.style.backgroundColor = "blue"
block.style.backgroundColor='black'
console.log(down.innerHTML);

const moveRight = function(){
    
let leftPos=parseInt(ball.style.left)|| 0
if (leftPos<405) {
    leftPos+=15
    ball.style.left = leftPos +'px'
}else{alert('hit a wall!')}

  }


  const moveLeft = function(){
    
    let leftPos=parseInt(ball.style.left)|| 0
    if (leftPos>14) {
        leftPos-=15
        ball.style.left = leftPos +'px'
    }else{alert('hit a wall!')}
    
      }

      const moveDown = function(){
    
        let topPos=parseInt(ball.style.top)|| 0
        if (topPos<405) {
            topPos+=15
            ball.style.top = topPos +'px'
        }else{alert('hit a wall!')}
        
          }
          const moveUp = function(){
    
            let topPos=parseInt(ball.style.top)|| 0
            if (topPos>14) {
                topPos-=15
                ball.style.top = topPos +'px'
            }else{alert('hit a wall!')}
            
              }
        
              right.onclick=moveRight
              left.onclick=moveLeft
              up.onclick=moveUp
              down.onclick=moveDown






  const header = document.createElement("h1")
  header.innerHTML = "The Best Game Ever"
  header.setAttribute("class", "my-header")

  document.body.appendChild(header)
  
  const subHeader = document.createElement("h2")
  subHeader.innerHTML = "Created By: Rami"
  subHeader.setAttribute("class", "my-header")

  document.body.appendChild(subHeader)

