var noOfButtons = document.querySelectorAll(".drum").length;

// for clicks on buttons
for (let i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //  this.style.color="white"
    var buttonInnerHtml = this.innerHTML;
    handleSound(buttonInnerHtml) 
    buttonAnimation(buttonInnerHtml)
  });
}


// for keyboard press
document.addEventListener('keypress',function(event){
handleSound(event.key)
buttonAnimation(event.key)
})


// function to handle sound
function handleSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    default:
      console.log(buttonInnerHtml)
      break;
  }
}


function buttonAnimation(key){
let activeBtn= document.querySelector("."+key)
activeBtn.classList.add("pressed")
setTimeout(function(){

  activeBtn.classList.remove("pressed")
},100)
}