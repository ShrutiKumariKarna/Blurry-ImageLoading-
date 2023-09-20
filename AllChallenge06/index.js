const background = document.getElementById('image');
const counter = document.querySelector('.num-in-per');
let timer = 0;

const load = setInterval(() => {
    if (timer <= 100) {
        counter.innerText = `${timer}%`;
        counter.style.opacity=scale(timer,0,100,1,0);
        background.style.filter= `blur(${scale(timer, 0, 100, 30, 0)}px)`;
        timer++;
    } else {
        clearInterval(load);
    }
}, 30);

//one range of nos. to another 
function scale (number, inMin, inMax, outMin, outMax) { return (number - inMin) * (outMax-outMin) / (inMax - inMin) + outMin; }
