function HvW(){
    if(screen.availHeight > screen.availWidth){
        try{
        document.querySelector("ul").style.fontSize = "2em";
        }catch(ex){}
        try{
        document.getElementById("foot").style.fontSize = "1.5em";
        }catch(ex){}
        try{
        document.querySelector("h1").style.fontSize = "3em";
        }catch(ex){}
        try{
        document.getElementById("paras").style.fontSize = "1em";
        }catch(ex){}
    }else if(screen.availHeight < screen.availWidth){
        try{
        document.querySelector("ul").style.fontSize = "2em";
        }catch(ex){}
        try{
        document.getElementById("foot").style.fontSize = "1.5em";
        }catch(ex){}
        try{
        document.querySelector("h1").style.fontSize = "3em";
        }catch(ex){}
        try{
        document.getElementById("paras").style.fontSize = "1em";
        }catch(ex){}
    }
}



setInterval(function(){
    HvW();    
    
    
    }, 0);
