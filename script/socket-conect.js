var socket = io();

let form = document.getElementById("form");
let input = document.getElementById("input");
let mensaje = document.getElementById("mensaje");
let body = document.getElementById("body");




body.addEventListener('onload', function(){
    if(Notification.permission!== 'granted'){
        Notification.requestPermission();
    }
});

function mandarNotificacion(msg){
    if(Notification.permission!== 'granted'){
        Notification.requestPermission();
    }else{
        const options = {
            body:msg,
            dir:'ltr'
        };
        const notificacion = new Notification('Notification',options);
        notificacion.onclick=function(){
            window.open("https://google.com.mx")
        }
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    socket.emit('chat message', input.value);
    input.value='';

    console.log('Se envio');
});


socket.on('chat message', function(msg){
    let item = document.createElement('li');
    item.textContent=msg;

    mensaje.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);

    mandarNotificacion(msg);
})



