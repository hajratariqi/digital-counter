var timer = prompt("Enter a milisecont")
var stop = prompt("Enter the stop value")
var add = document.getElementById("add")
var remove = document.getElementById("remove")
var pause = document.getElementById("pause")
var numhd = document.getElementById("num")
var num = 0;

function plus(){
    numhd.innerHTML = num += 1;
}
var interval = setInterval(plus,timer)
setTimeout(function(){
    clearInterval(interval)
    },stop)

add.addEventListener("click",function(){
    numhd.innerHTML = num +=1;
})
remove.addEventListener("click",function(){
    numhd.innerHTML = num = 0;
})

pause.addEventListener("click",function(){
   var btn = document.getElementById("pause");
   if (btn.innerHTML === "pause"){
       clearInterval(interval);
       btn.innerHTML = "start";
   }else{
    interval = setInterval(plus,timer);
    btn.innerHTML = "pause"
   }
})

var but = document.getElementById("clock");
if (but.innerHTML == "Start") {
  interval = setInterval(timer, 10);
  but.innerHTML = "Pause";
} else {
  clearInterval(interval);
  but.innerHTML = "Start";
}