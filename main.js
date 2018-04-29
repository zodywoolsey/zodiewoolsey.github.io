
var last = localStorage.getItem("last");
localStorage.setItem("last", document.title);
var topp = document.getElementsByClassName("topGrad")[0];



if(last == "HomePage"){
    this.topp.classList.add("home");
}else if(last == "Media"){
    this.topp.classList.add("media");
}else if(last == "Details"){
    this.topp.classList.add("info");
}
    
setTimeout(function(){
    if(last != "HomePage"){
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