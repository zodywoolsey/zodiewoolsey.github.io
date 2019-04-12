let bodyElem = document.querySelector("#pageContainer");

setTimeout( ()=>{
    bodyElem.classList.add("borderExpanse");
} )
setTimeout( ()=>{
    bodyElem.classList.add("heightExpanse");
}, 200 )
setTimeout( ()=>{
    bodyElem.classList.add("widthExpanse");
}, 1500 );
setTimeout( ()=>{
    bodyElem.classList.add("wordWrapOn");
}, 2500 );