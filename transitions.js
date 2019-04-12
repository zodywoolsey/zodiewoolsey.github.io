let bodyElem = document.querySelector("#pageContainer");
let tmp = 0;
setTimeout( ()=>{
    bodyElem.classList.add("borderExpanse");
} )
setTimeout( ()=>{
    tmp += 500;
    bodyElem.style.maxHeight = `${tmp}px`;
    setTimeout( ()=>{
        tmp += 500;
        bodyElem.style.maxHeight = `${tmp}px`;
        setTimeout( ()=>{
            tmp += 500;
            bodyElem.style.maxHeight = `${tmp}px`;
            setTimeout( ()=>{
                tmp += 500;
                bodyElem.style.maxHeight = `${tmp}px`;
                setTimeout( ()=>{
                    bodyElem.classList.add("widthExpanse");
                }, 1500 );
                setTimeout( ()=>{
                    bodyElem.classList.add("wordWrapOn");
                    document.all[0].style.overflow = "auto";
                    bodyElem.style.maxHeight = "unset";
                }, 2500 );
            }, 200 )
        }, 200 )
    }, 200 )
}, 200 )