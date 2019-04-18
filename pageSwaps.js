function toPage(url){
    let transitionDuration = window.getComputedStyle(pageContainer).transitionDuration.replace(/\D/, '' )*1000;
    toPageStart();
    let pageGetter = new XMLHttpRequest();
    pageGetter.open('GET',url, true);
    pageGetter.onreadystatechange = ()=>{
        if(pageGetter.readyState === 4 && pageGetter.status === 200){
            let newPage = document.createElement('body');
            newPage.innerHTML = pageGetter.response;
            // console.log(pageGetter.response);
            document.querySelectorAll('body')[0].replaceWith(newPage);
            toPageEnd();
        }
    }
    setTimeout( ()=>{
        pageGetter.send();
    }, 1000 )
}