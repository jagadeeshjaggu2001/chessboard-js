const from_html = document.querySelectorAll("img");
const dino = from_html[0];
const cactus = from_html[1];


document.addEventListener("keydown", () => {
    dino.setAttribute("class", "dino");
    setTimeout(() => {
        dino.removeAttribute("class");
        
    }, 1000);
});
 
setTimeout(() => {
    cactus.style.animationDuration = "3s";

}, 12000);

setInterval(() => {
    let dino_position = window.getComputedStyle(dino).getPropertyValue("bottom");
    let cactus_position = window.getComputedStyle(cactus).getPropertyValue("right");
    
    if(
        parseInt(dino_position) <= 0 &&
        parseInt(cactus_position) >= 550 &&
        parseInt(cactus_position) <= 570
    ) {
        alert("GAME OVER");
        window.location.reload();
    }
    console.log(dino_position, cactus_position);
}, 1);



