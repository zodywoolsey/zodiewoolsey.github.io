
var last = sessionStorage.getItem("last");
sessionStorage.setItem("last", document.title);
var topp = document.getElementsByClassName("topGrad")[0];

if(last == "HomePage"){
    this.topp.classList.add("home");
}else if(last == "Media"){
    this.topp.classList.add("media");
}else if(last == "Details"){
    this.topp.classList.add("info");
}

//code for delayed execution so that the above can be applied first (causes issues if this second part is not delayed or they are too close in time)
setTimeout(function(){
    if(last != "HomePage"){//sets the background (without transition timers) to that of the last visited page on the site
    this.topp.classList.remove("home");
}else if(last != "Media"){
    this.topp.classList.remove("media");
}else if(last != "Details"){
    this.topp.classList.remove("info");
}
    if(document.title == "Media" && last != "Media"){
        this.topp.classList.add("mediaTrans");
    }else if(document.title == "HomePage" && last != "HomePage"){
        this.topp.classList.add("homeTrans");
    }else if(document.title == "Details" && last != "Details"){
        this.topp.classList.add("infoTrans");
    }
}, 10)


//Code to make the logo blur on scroll
setInterval(function(){
    document.getElementById("logo").style.filter = ("blur("+ document.querySelector("html").scrollTop/64 + "px)");
})