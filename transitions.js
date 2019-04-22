let pageContainer = document.querySelector("#pageContainer");
let pageInit = () => {
    let transitionDuration = window.getComputedStyle(pageContainer).transitionDuration.replace(/\D/, '' )*1000;
    let initDelay = 200;
    pageContainer.classList.add("borderExpanse");
        pageContainer.style.maxHeight = `${innerHeight}px`;
    // initDelay = transitionDuration+100;
    setTimeout( ()=>{
        pageContainer.classList.add("widthExpanse");
        // pageContainer.style.minHeight = "100vh";
        pageContainer.style.maxHeight = "unset";
    }, initDelay );
    initDelay += 1000;
    setTimeout( ()=>{
        pageContainer.classList.add("pageInitFinish");
        pageContainer.style.overflow = "auto";
    }, initDelay );
}
function toPageStart(){
    pageContainer.classList.remove("widthExpanse");
    pageContainer.classList.remove("borderExpanse");
    pageContainer.classList.remove("pageInitFinish");
}
function toPageEnd(){
    pageContainer = document.querySelector("#pageContainer");
    // pageContainer.style.minHeight = "unset";
    pageContainer.style.maxHeight = "unset";
    setTimeout( ()=>{
        pageContainer.classList.add("borderExpanse");
        pageContainer.classList.add("widthExpanse");
        pageContainer.classList.add("pageInitFinish");
    }, 200 )
}


// document.querySelectorAll("button")[0].click = togglePage;
setTimeout( ()=>{
    pageInit();
}, 10 );