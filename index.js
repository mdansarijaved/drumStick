for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
document.querySelectorAll("button")[i].addEventListener("click",handleEvent)
function handleEvent(){
    alert("hello!")
}
}
