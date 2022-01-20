canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
radius = 0;
width = 0;
 var mouseEvent = "";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
   current_mouse_x = e.clientX - canvas.offsetLeft;
   current_mouse_y = e.clientY - canvas.offsetTop;

   if(mouseEvent == "mouseDown"){
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = width;
       ctx.arc(current_mouse_x, current_mouse_y, radius, 0, 2 * Math.PI) 
       ctx.stroke();  
   }
}