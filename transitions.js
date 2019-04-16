let pageContainer = document.querySelector("#pageContainer");
let transitionDuration = window.getComputedStyle(pageContainer).transitionDuration.replace(/\D/, '' )*1000;
let smoothHeightVar = 0;
let initDelay = 200;
let pageInit = () => {
    pageContainer.classList.add("borderExpanse");
    setTimeout( ()=>{
        pageContainer.style.maxHeight = `${innerHeight}px`;

    }, 100 )
    // for(i = 0; i < 1; i++){
    //     setTimeout( ()=>{
    //         smoothHeightVar += 500;
    //         pageContainer.style.maxHeight = `${smoothHeightVar}px`;
    //     }, initDelay )
    //     initDelay+=200
    // }
    console.log(innerHeight)
    initDelay = transitionDuration+100;
    setTimeout( ()=>{
        pageContainer.classList.add("widthExpanse");
        pageContainer.style.maxHeight = "unset";
    }, initDelay );
    initDelay += 1000;
    setTimeout( ()=>{
        pageContainer.classList.add("pageInitFinish");
        pageContainer.style.overflow = "auto";
    }, initDelay );
}
pageInit();