"use strict";

const btn = document.querySelector(".button");
const body = document.querySelector("body");


btn.addEventListener("click", () => {
    window.scrollTo(0,0);
    }
);

btn.style.visibility = "hidden"; 

document.addEventListener("scroll", ()=>{

    let pixel = document.documentElement.scrollTop;

    if(pixel < 900) {
        btn.style.visibility = "hidden"; 
    } else {
        btn.style.visibility = "visible"; 
    }
    
    if(pixel > 0 && pixel <= 100) {
        body.style.background = "blue";
    }
    if(pixel > 101 && pixel <= 200) {
        body.style.background = "red";
    }
    if(pixel > 201 && pixel <= 300) {
        body.style.background = "aquamarine";
    }
    if(pixel > 301 && pixel <= 400) {
        body.style.background = "green";
    }
    if(pixel > 401 && pixel <= 500) {
        body.style.background = "purple";
    }
    if(pixel > 501 && pixel <= 600) {
        body.style.background = "aqua";
    }
    if(pixel > 601 && pixel <= 700) {
        body.style.background = "yellow";
    }
    if(pixel > 701 && pixel <= 800) {
        body.style.background = "cyan";
    }
    if(pixel > 801 && pixel <= 900) {
        body.style.background = "grey";
    }
    if(pixel > 901 && pixel <= 1000) {
        body.style.background = "pink";
    }
});


