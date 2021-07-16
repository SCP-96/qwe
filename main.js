canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
OMG_a_mobile_task_force_squad = ("Arrow key.png");
console.log("background_image" + background_image);

function Add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
keyPressed = e.keycode;
console.log(keyPressed);
if (keyPressed == '38') {
up();
console.log("up");
}
if (keyPressed == '40') {
down();
console.log("down");
}
if (keyPressed == '37') {
left();
console.log("left");
}
if (keyPressed == '39') {
right();
console.log("right")
}
}
function up() {
    background_image = OMG_a_mobile_task_force_squad;
console.log("this is arrow key");
uploadBackground();
}

function down() {
    background_image = OMG_a_mobile_task_force_squad;
    console.log("this is arrow key");
    uploadBackground();
 
    }
    function left() {
        background_image = OMG_a_mobile_task_force_squad;
        console.log("this is arrow key");
        uploadBackground();
        
        }
        function right() {
            background_image = OMG_a_mobile_task_force_squad;
        
            console.log("this is arrow key");
            uploadBackground();    
        }            
            
            
            
        
        
    
    
    
    








