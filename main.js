colors=  ["red", "black","green","blue","white"]


const button = document.getElementById('btn')
const box = document.querySelector('.box')


button.addEventListener("click" , ()=>{
box.style.backgroundColor = `#${randomHex()}` //concatenated   random 6 digit alphanumeric code 

})

// advanced
// usage of Math.random property to 




function randomHex() {
  var hexCode = "";
  var possibleValues = "abcdef0123456789";

  for (var i = 0; i < 6; i++)
    hexCode += possibleValues.charAt(Math.floor(Math.random() * possibleValues.length));

  return hexCode;
}
