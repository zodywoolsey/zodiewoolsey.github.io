let portfolioBody = document.querySelectorAll('body')[0];

let resumeGetter = new XMLHttpRequest()
resumeGetter.open('GET', 'resume.html', false);
resumeGetter.send();

let resumePageContainer = document.createElement('body');
resumePageContainer.innerHTML = resumeGetter.response;

function toResumePage(){
    portfolioBody.replaceWith(resumePageContainer);
}
function toPortfolioPage(){
    resumePageContainer.replaceWith(portfolioBody);
}
function toGoogle(){
    let gpageGetter = new XMLHttpRequest();
    gpageGetter.open('GET', 'www.google.com', false);
    gpageGetter.send();
    let gpage = document.createElement('body');
    gpage.innerHTML = gpageGetter.response;
    document.all[0].replaceWith();
}

function toPage(url){
    let transitionDuration = window.getComputedStyle(pageContainer).transitionDuration.replace(/\D/, '' )*1000;
    toPageStart();
    let pageGetter = new XMLHttpRequest();
    pageGetter.open('GET',url, true);
    pageGetter.onreadystatechange = ()=>{
        if(pageGetter.readyState === 4 && pageGetter.status === 200){
            let newPage = document.createElement('body');
            newPage.innerHTML = pageGetter.response;
            console.log(pageGetter.response);
            document.querySelectorAll('body')[0].replaceWith(newPage);
            toPageEnd();
        }
    }
    setTimeout( ()=>{
        pageGetter.send();
    }, 1000 )
}