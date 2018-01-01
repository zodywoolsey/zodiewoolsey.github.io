function forMobile(){
    var height = window.screen.availHeight;
    var width = window.screen.availWidth;

    var pageHeader = document.getElementsByClassName("pageHeader");
    var subHeader = document.getElementById("subHeader");
    for (i = 0; i < pageHeader.length; i++){
        pageHeader[i].style.fontSize = (.05*width) + "px";
    }
    subHeader.style.fontSize = (.015*width) + "px"

}