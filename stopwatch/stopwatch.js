
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');
let ms = document.getElementById('ms');

let time = 0;
 
let interval;

const start = () => {
    
    updateUI(hour,minute,second,milisecond);
}
let interval;
const stop = () => {
    clearInterval(interval);
}
const reset = () => {
    clearInterval(interval)
    time = 0;
    updateUI(hour,minute,second,milisecond);
}



