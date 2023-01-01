const socket = io('https://testing-rw.up.railway.app:8000/' || 'http://localhost:8000');

const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const setBlackButton = document.getElementById("setBlack");
const setRedButton = document.getElementById("setRed");
const setGreenButton = document.getElementById("setGreen");
const setBlueButton = document.getElementById("setBlue");
const setPartyButton = document.getElementById("setParty");
const instaButton = document.getElementById("insta");
const youtubeButton = document.getElementById("youtube");

setBlackButton.addEventListener("click", () => {
    socket.emit('set-black-order');
});

setRedButton.addEventListener("click", () => {
    socket.emit('set-red-order');
});

setGreenButton.addEventListener("click", () => {
    socket.emit('set-green-order');
});

setBlueButton.addEventListener("click", () => {
    socket.emit('set-blue-order');
});

setPartyButton.addEventListener("click", () => {
    socket.emit('set-party-order');
});

instaButton.addEventListener("click", () => {
    console.log("INSTA");
});

youtubeButton.addEventListener("click", () => {
    socket.emit('yt-open-order');
});

socket.emit('user-joined', "ADMIN_" + makeid(14));