colors=  ["red", "black","green","blue","white"]


const button = document.getElementById('btn')
const box = document.querySelector('.box')


button.addEventListener("click" , ()=>{
box.style.backgroundColor = `#${randomHex()}` //concatenated   random 6 digit alphanumeric code 

})





function randomHex() {
  var hexCode = "";
  var possibleValues = "abcdef0123456789";

  for (var i = 0; i < 6; i++)
    hexCode += possibleValues.charAt(Math.floor(Math.random() * possibleValues.length));

  return hexCode;
}

// advanced
// this function takes a random integer within the length of  variable "possibleValues" and then stores char/int  in "hexCode" variable upto 6 times