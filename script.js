let sideone = 0
let sidetwo = 0
let height = 0
let number = 0
// these are the variables for my answers.
document.getElementById('calculate').addEventListener('click', buttonOne)
// this event listener creates a button to calculate the area of the trapezoid.
function buttonOne () {
 sideone = document.getElementById('sideone').value
 sideone = parseInt(sideone)
 sidetwo = document.getElementById('sidetwo').value
 sidetwo = parseInt(sidetwo)
 height = document.getElementById('height').value
 height = parseInt(height)
 number = (sideone + sidetwo) / 2 * height
document.getElementById('area').innerHTML = (number)
}// this code allows the document to take side 1 and side 2 and divide them by 2, then it will take the number from that and multiply it by the height to give you the area of a trapezoid.