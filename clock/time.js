let hr=document.getElementById('hr');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

setInterval(()=> {
    let sec_1 = (new Date().getSeconds() /60) * 360;
    sec.style.transform = `rotate(${sec_1}deg)`;
    let min_1 = (new Date().getMinutes() /60) * 360;
    min.style.transform = `rotate(${min_1}deg)`;
    let hr_1 = (new Date().getHours() / 12) * 360 + min_1 / 12;
    hr.style.transform = `rotate(${hr_1}deg)`;
}, 1000);
