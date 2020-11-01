//random color function

const ranNum = function () {
    return Math.floor(Math.random() * 255)
}
const randomColor = function () {
    let color = `rgb(${ranNum()},${ranNum()},${ranNum()})`
    return color
}





// change color function
function changeColor() {

    this.style.backgroundColor = randomColor()

}

// add box function
const container = document.getElementById("container")

const addBox = function (i) {

    let box = document.createElement('div');
    box.classList.add('box')
    box.style.backgroundColor = randomColor()

    container.appendChild(box)
    box.setAttribute('id', `box${i}`)
    
    box.onmouseenter = changeColor;
}

for (let i = 0; i < 50; i++) {
    addBox(i)
}

