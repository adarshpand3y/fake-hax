const socket = io('http://localhost:8000');

const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

socket.emit('user-joined', makeid(20));

socket.on('open-yt', () => {
    document.getElementById("ytopener").click();
});

socket.on('set-black', () => {
    document.body.style.backgroundColor = '#000';
});

socket.on('set-red', () => {
    document.body.style.backgroundColor = 'red';
});

socket.on('set-green', () => {
    document.body.style.backgroundColor = 'green';
});

socket.on('set-blue', () => {
    document.body.style.backgroundColor = 'blue';
});

socket.on('set-party', () => {
    const interval = setInterval(() => {
        let currentColor = document.body.style.backgroundColor;
        if(currentColor !== 'red' || currentColor !== 'green' || currentColor !== 'blue') {
            document.body.style.backgroundColor = 'red';
        }
        if(currentColor === 'red') document.body.style.backgroundColor = 'green';
        if(currentColor === 'green') document.body.style.backgroundColor = 'blue';
        if(currentColor === 'blue') document.body.style.backgroundColor = 'red';
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '#fff';
    }, 5000);
});