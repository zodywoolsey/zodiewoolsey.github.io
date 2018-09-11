
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
    
var d = new Date();
    document.getElementById("logo").style.filter = ("blur("+ document.querySelector("html").scrollTop/64 + "px)");
    
    apm = ""
    
    if(d.getHours() >= 12){
        apm = "PM";
    }else if(d.getHour() < 12){
        apm = "AM";
    }
    
    if(d.getHours()%12 == 0 || d.getHours()%12 == "0"){
        d.setHours(12);
    }
    
    document.getElementById("clock").innerHTML = "Time: " + (d.getHours()%12) +":"+ d.getMinutes() +":"+ d.getSeconds() +" "+ apm+ "<br>" + "Date: " + d.getDay() + " " + ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()] + " " + d.getFullYear();
    
    try{
    sh = document.getElementById("smashHeader");
    
    //console.log(sh.getBoundingClientRect().top);
    if(sh.getBoundingClientRect().top < 0){
        sh.style.filter = ("blur("+ -(sh.getBoundingClientRect().top/30) + "px)");
    }else{
        sh.style.filter = ("blur("+ "0" + "px)");
    }
}catch(Exception){}
})

function bigText(){
    document.getElementById("lorem").style.fontSize="2em";
}