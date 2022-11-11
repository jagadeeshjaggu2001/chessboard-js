let inputs = document.querySelectorAll("input");
let cardPage = document.querySelector("#card");
let createGmail = document.querySelector("#createGmail");

let warn = [
    "Enter first name",
    "Enter last name",
    "Choose a gmail address",
    "Enter a password",
    "Confirm password",
];

let span = document.querySelectorAll("span");
const next = document.querySelector("#sign h6");

let password = inputs[3];
let confirm_password = inputs[4];
let tick = inputs[5];

next.addEventListener("click", () => {
    inputs.forEach((e, i) => {
        if (e.value == "") {
            span[i].innerHTML = `<ion-icon name="alert-circle-sharp"></ion-icon> ${warn[i]}`;
        }
        else {
            span[i].innerHTML = "";
        }
        if(password.value != "" && password.value == confirm_password.value){
            span[3].innerHTML = "password Matched";
            span[4].innerHTML = "lightgreen";
            span[5].innerHTML = "bold";
        } else{
            if (password.value != ""){
                span[3].innerHTML = "password not matched";
            }
        }
    });
});

tick.addEventListener("click", () => {
    if (password.getAttribute("type")=="text"){
        password.setAttribute("type", "password");
        confirm_password.setAttribute("type", "password");
    }
    else{
        password.setAttribute("type", "text");
        confirm_password.setAttribute("type", "text");
    }
});



