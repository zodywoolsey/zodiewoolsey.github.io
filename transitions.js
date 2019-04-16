let pageContainer = document.querySelector("#pageContainer");
let pageInit = () => {
    let transitionDuration = window.getComputedStyle(pageContainer).transitionDuration.replace(/\D/, '' )*1000;
    let initDelay = 200;
    pageContainer.classList.add("borderExpanse");
        pageContainer.style.minHeight = `${innerHeight}px`;
    // for(i = 0; i < 1; i++){
    //     setTimeout( ()=>{
    //         smoothHeightVar += 500;
    //         pageContainer.style.maxHeight = `${smoothHeightVar}px`;
    //     }, initDelay )
    //     initDelay+=200
    // }
    initDelay = transitionDuration+100;
    setTimeout( ()=>{
        pageContainer.classList.add("widthExpanse");
        pageContainer.style.minHeight = "100vh";
        pageContainer.style.maxHeight = "unset";
    }, initDelay );
    initDelay += 1000;
    setTimeout( ()=>{
        pageContainer.classList.add("pageInitFinish");
        pageContainer.style.overflow = "auto";
    }, initDelay );
}
setTimeout( ()=>{
    pageInit();
}, 100 );