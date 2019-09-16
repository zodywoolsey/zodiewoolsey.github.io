function toPage(url){
    let transitionDuration = window.getComputedStyle(pageContainer).transitionDuration.replace(/\D/, '' )*1000;
    if(url.includes('portfolio')){
        window.history.pushState('portfolio','Portfolio','#portfolio')
    }else if(url.includes('resume')){
        window.history.pushState('resume','Resume','#resume')
    }else if(url.includes('contact')){
        window.history.pushState('contact','Contact','#contact')
    }
    toPageStart();
    let pageGetter = new XMLHttpRequest();
    pageGetter.open('GET',url, true);
    pageGetter.onreadystatechange = ()=>{
        if(pageGetter.readyState === 4 && pageGetter.status === 200){
            let newPage = document.createElement('body');
            newPage.innerHTML = pageGetter.response;
            document.querySelectorAll('body')[0].replaceWith(newPage);
            toPageEnd();
        }
    }
    setTimeout( ()=>{
        pageGetter.send();
    }, 1000 )
}