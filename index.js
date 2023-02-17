const keySound=(key)=>{
  let new_audio;
  switch (key) {
    case "w":
       new_audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
       new_audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
       new_audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
       new_audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
       new_audio = new Audio("sounds/crash.mp3");
      break;
    case "k":
       new_audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "l":
       new_audio = new Audio("sounds/snare.mp3");
      break;
    default:
      break;
  }
  try {
    new_audio.play();
  } catch (error) {
  }
}
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", (e)=>{
    keySound(e.target.innerText);
  });
}
document.addEventListener("keydown",(e)=>{
  const key=e.key;
 keySound(key);
})

// function bros(name, age, adress, experience) {
//   this.name = name;
//   this.age = age;
//   this.adress = adress;
//   this.experience = experience;
//   this.clean = function(){
//     alert("Cleaning the room sir!")
//   }
// }

// var bro1 = new bros(
//   "musadiq",
//   21,
//   "kashmiri mirch",
//   "13years"
// );

// console.log(bro1);
