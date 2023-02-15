for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
document.querySelectorAll("button")[i].addEventListener("click",handleEvent)
function handleEvent(){
    var new_audio = new Audio('sounds/tom-1.mp3'); 
    new_audio.play(); 
}
}
