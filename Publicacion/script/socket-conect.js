var socket = io();

let form = document.getElementById("form");
let input = document.getElementById("input");
let mensaje = document.getElementById("mensaje");


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
})



