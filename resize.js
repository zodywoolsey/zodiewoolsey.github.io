function HvW(){
    if(screen.availHeight > screen.availWidth){
        document.querySelector("ul").style.fontSize = "2em";
        document.getElementById("foot").style.fontSize = "2em";
        document.querySelector("h1").style.fontSize = "3em";
        document.getElementById("paras").style.fontSize = "1em";
    }else if(screen.availHeight < screen.availWidth){
        document.querySelector("ul").style.fontSize = "2em";
        document.getElementById("foot").style.fontSize = "2em";
        document.querySelector("h1").style.fontSize = "3em";
        document.getElementById("paras").style.fontSize = "1em";
    }
}



setInterval(function(){
    HvW();    
    
    
    }, 0);