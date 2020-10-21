
const getColor = () => parseInt(Math.random() * 255)
function displayColor(r, g, b){
    document.querySelector('#red').innerHTML =  r;
    document.querySelector('#green').innerHTML =  g;
    document.querySelector('#blue').innerHTML =  b;
}

function putColor(){
    let R = getColor()
    let G = getColor()
    let B = getColor()
    displayColor(R, G, B)
    document.getElementById('color-display').style.background = `rgb(${R}, ${G}, ${B})`
    document.getElementById('button').style.background = `rgb(${R}, ${G}, ${B})`
}

document.querySelector('#button').addEventListener('click', putColor)
