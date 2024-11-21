const socket = io()

const input = document.getElementById('input');
const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
})