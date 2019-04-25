let pageContainer = document.querySelector(".pageContainer");

url = document.URL;

if(!url.includes('#') || url.includes('portfolio')){
    toPage('portfolio.html');
}else if( url.includes('resume')){
    toPage('resume.html');
}else if(url.includes('contact')){
    toPage('contact.html');
}
function toPageStart(){
    pageContainer.classList.remove("widthExpanse");
    pageContainer.classList.remove("borderExpanse");
    pageContainer.classList.remove("pageInitFinish");
}
function toPageEnd(){
    pageContainer = document.querySelector(".pageContainer");
    // pageContainer.style.minHeight = "unset";
    pageContainer.style.maxHeight = "unset";
    setTimeout( ()=>{
        pageContainer.classList.add("borderExpanse");
        pageContainer.classList.add("widthExpanse");
        pageContainer.classList.add("pageInitFinish");
    }, 200 )
}