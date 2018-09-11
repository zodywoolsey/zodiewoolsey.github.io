'use strict';
//setTimeout(()=>{location.reload()},1000)

let navButton = document.getElementById("nav_butt");
let navBar = document.getElementById("nav_bar");
navButton.onclick = () => {
    if(navBar.style.maxHeight != "1.4em"){
        navBar.style.maxHeight = "1.4em";
    }else{
        navBar.style.maxHeight = "0em";
    }
    
};
