var circle=document.getElementById('circle');
document.onkeydown=keyName;
function init(){
    circle.style.position = "relative";
    circle.style.top = "0px";
    circle.style.left = "0px";
}
function keyName(event){
    event= event||window.event;
    if(event.code =='KeyW'){
        circle.style.top=parseInt(circle.style.top) - 50 + "px";
        console.log("W Upwards")
    }
    else if(event.code =='KeyS'){
        circle.style.top = parseInt(circle.style.top) + 50+ "px";
        console.log("S Downward")
    }
    else if(event.code == 'KeyA'){
        circle.style.left = parseInt(circle.style.left) - 50 + "px";
        console.log("A Left")
    }
    else if(event.code == 'KeyD'){
        circle.style.left = parseInt(circle.style.left) + 50 + "px";
        console.log("D Right")
    }  
}
window.onload = init;