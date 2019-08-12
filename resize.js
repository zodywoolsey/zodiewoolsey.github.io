function HvW(){
    if(screen.availHeight > screen.availWidth){
        try{
        document.querySelector("ul").style.fontSize = "2em";
        }catch(){}
        try{
        document.getElementById("foot").style.fontSize = "1.5em";
        }catch(){}
        try{
        document.querySelector("h1").style.fontSize = "3em";
        }catch(){}
        try{
        document.getElementById("paras").style.fontSize = "1em";
        }catch(){}
    }else if(screen.availHeight < screen.availWidth){
        try{
        document.querySelector("ul").style.fontSize = "2em";
        }catch(){}
        try{
        document.getElementById("foot").style.fontSize = "1.5em";
        }catch(){}
        try{
        document.querySelector("h1").style.fontSize = "3em";
        }catch(){}
        try{
        document.getElementById("paras").style.fontSize = "1em";
        }catch(){}
    }
}



setInterval(function(){
    HvW();    
    
    
    }, 0);
