let deferredPrompt;

showInstall = ()=>{
    document.querySelector('#installButton').show();
}

window.addEventListener('beforeinstallprompt', (e)=>{
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    //Update UI notify the user they can add to home screen
    showInstall();
})


if(`serviceworker` in navigator){
    navigator.serviceWorker.register('./serviceworker.js');
}
var button = document.querySelector('#notif');
button.addEventListener('click', function(e){
    Notification.requestPermission().then(function(result){
        if(result == 'granted'){
            randomNotification();
        }
    })
})