let pageContainer = document.querySelector("#pageContainer");
let tmp = 0;
setTimeout( ()=>{
    pageContainer.classList.add("borderExpanse");
}, 500 )
setTimeout( ()=>{
    tmp += 500;
    pageContainer.style.maxHeight = `${tmp}px`;
    setTimeout( ()=>{
        tmp += 500;
        pageContainer.style.maxHeight = `${tmp}px`;
        setTimeout( ()=>{
            tmp += 500;
            pageContainer.style.maxHeight = `${tmp}px`;
            setTimeout( ()=>{
                tmp += 500;
                pageContainer.style.maxHeight = `${tmp}px`;
                setTimeout( ()=>{
                    pageContainer.classList.add("widthExpanse");
                }, 1500 );
                setTimeout( ()=>{
                    pageContainer.classList.add("wordWrapOn");
                    // document.all[0].style.overflow = "auto";
                    pageContainer.style.maxHeight = "unset";
                }, 2500 );
            }, 200 )
        }, 200 )
    }, 200 )
}, 200 )