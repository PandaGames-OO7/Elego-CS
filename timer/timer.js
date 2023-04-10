const timer = document.querySelector('#countDown');
let startingTime = 10;
let time = startingTime * 60;

countDown = () =>{
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.innerHTML = `Time left ${minutes} : ${seconds}`;
    time--;
}
setInterval(countDown, 1000);
