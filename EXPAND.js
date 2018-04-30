if(sessionStorage.getItem("visited") != "1"){
    document.getElementsByClassName("html")[0].classList.add("init");
}
sessionStorage.setItem("visited", "1");
setTimeout(function(){
    document.getElementsByClassName("html")[0].classList.remove("init");
}, 1);