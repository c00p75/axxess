const leftColumn = document.querySelector(".left");
const rightColumn = document.querySelector(".right");

window.addEventListener('keyup', (e) => {
    setTimeout(() => {
        if (e.key == 'ArrowUp') { // up
            prev();
        }
        if (e.key == 'ArrowDown') { // down
            next();
        }
    }, 200);
});

document.addEventListener('mousewheel', scroll);
document.addEventListener('DOMMouseScroll', scroll);


var divL = leftColumn.getElementsByTagName("div");
var divR = rightColumn.getElementsByTagName("div");

function next() {
    leftColumn.classList.add("next");
    rightColumn.classList.add("next");

    setTimeout(() => {
        divL[0].parentNode.appendChild(divL[0]);
        divR[2].parentNode.insertBefore(divR[2], divR[0]);
        leftColumn.classList.remove("next");
        rightColumn.classList.remove("next");
    }, 600);
}

function prev() {
    leftColumn.classList.add("prev");
    rightColumn.classList.add("prev");

    setTimeout(() => {
        divR[0].parentNode.appendChild(divR[0]);
        divL[2].parentNode.insertBefore(divL[2], divL[0]);
        leftColumn.classList.remove("prev");
        rightColumn.classList.remove("prev");
    }, 600);
}

// Auto-scroll every 4 seconds
setInterval(() => {
    next(); // Change to prev() if you want it to go backward
}, 4000);
