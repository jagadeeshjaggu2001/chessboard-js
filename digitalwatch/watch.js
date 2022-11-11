function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }



    document.getElementById('hr').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}
setInterval(displayTime, 10);

let a = new Date();
document.querySelector("#day").innerHTML = a.getDay()-1;
document.querySelector("#month").innerHTML = a.getMonth()+1;
document.querySelector("#year").innerHTML = a.getFullYear();



