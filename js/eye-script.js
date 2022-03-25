var iris = document.getElementsByClassName("emoji-iris");
document.onmousemove = function(){
  var x = event.clientX * 100/window.innerWidth + "%";
  var y = event.clientY * 100/window.innerHeight + "%";

  //event.clientX => get the horizontal coordinate of the onMouseMove
  //event.clientY => get the verticle coordinate of the onMouseMove
  //window.innerWidth => get the browser width
  //window.innerHeight => get the browser height

  for(var i=0;i<2;i++){
    iris[i].style.left = x;
    iris[i].style.top = y;
    iris[i].style.transform = "translate(-"+x+", -"+y+")";
  }
}