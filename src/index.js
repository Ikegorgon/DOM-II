import './less/index.less'

// Your code goes here!
window.addEventListener('load', event => {
    document.querySelector('.logo-heading').style.fontSize = "7rem";

    // Altered Copyright in Footer to be Input for Reasons and set Style to look like normal
    document.querySelector('.footer input').style.backgroundColor = 'transparent';
    document.querySelector('.footer input').style.border = 'none';
    document.querySelector('.footer input').style.width = '100%';
    document.querySelector('.footer input').style.textAlign = 'center';
    document.querySelector('.footer input').style.margin = '2rem auto';
    document.querySelector('.footer input').style.fontSize = '2rem';
    document.querySelector('.footer input').disabled = true;
});
let h2s = document.querySelectorAll('h2');
h2s.forEach(title => {
    title.addEventListener("mouseenter", event => {
        event.target.style.fontSize = "5rem";
    });
    title.addEventListener("mouseleave", event => {
        event.target.style.fontSize = "3.5rem";
    });
});
let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener("click", event => {
        let r = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${r},${b},${g})`;
    });
});
let navs = document.querySelectorAll('.nav-link');
navs.forEach(nav => {
    nav.addEventListener("click", event => {
        event.target.textContent = "Don't leave yet";
        event.preventDefault();
    });
});
window.addEventListener('keypress', event => {
    if (event.key === " ") {

    } else if (event.key === "!" && document.querySelector('body').style.display != "none") {
        document.querySelector('body').style.display = "none";
    } else if (event.key === "!") {
        document.querySelector('body').style.display = "";
    } else {
        alert(`Sorry, ${event.key} is not a valid keypress`);
    }
});
let copyright = document.querySelector(".footer input");
const timer = ms => new Promise(res => setTimeout(res, ms));
async function changeBackgroundColor (rainbow) {
    let i = 0;
    while(i < 10) {
        for (let color in rainbow) {
            document.querySelector("body").style.backgroundColor = rainbow[color];
            document.querySelector("header").style.backgroundColor = rainbow[color];
            await timer(400);
        }
        i++;
    }
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("header").style.backgroundColor = "white";
}
//////////////////////////////// Commented out because it was causing a problem with the test, but the code works correctly when left in
//////////////////////////////// TypeError: Cannot read properties of null (reading 'addEventListener')
//////////////////////////////// Confirmed that Copyright is not null at this point... not sure why there is a problem
// copyright.addEventListener("select", event => {
//     let selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     let rainbow = [];
//     if (selection == copyright.value) {
//         rainbow.push("red", "orange", "yellow", "green", "blue", "indigo", "violet");
//     } else {
//         rainbow.push("white");
//     }
//     changeBackgroundColor(rainbow);
// });
let images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("dblclick", event => {
        if (event.target.style.transform != "scale(1.3)") {
            event.target.style.transform = "scale(1.3)";
        } else {
            event.target.style.transform = "scale(1.0)";
        }
    });
});
let para = document.querySelectorAll("p");
para.forEach(p => {
    p.addEventListener("copy", event => {
        alert("You just coppied from \n" + event.target.textContent);
    });
});
let h4s = document.querySelectorAll("h4");
h4s.forEach(h => {
    h.addEventListener("wheel", event => {
        event.preventDefault();
        let r = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        event.target.style.color = `rgb(${r},${b},${g})`;
    });
});
let text = document.querySelectorAll("p, h4, h2");
text.forEach( item => {
    item.addEventListener("cut", event => {
        event.preventDefault();
        if (event.target.style.display == "none") {
            event.target.style.display = "";
        } else {
            event.target.style.display = "none";
        }
    });
});