// var template = `<div style="width: 100%; display: flex; align-items: center;">
// <div style='text-align: right;'>RESULT</div>
// <div style='width: 100%;'>
// <div style='width: 80%; background-color: black; padding: 1px 0 ; margin: 0 auto;'></div>
// </div>
// <div style='text-align: right;'>EQUATION</div>
// </div>`;
// var content = `<div style='width: 20%; margin: auto; padding: 0px; '>\n<div style='margin: 0; padding: 0; border-left: .2em solid black; border-right: .2em solid black;'>`;
// i = 0

// go = ()=>{
//     i = i+1
//     var entry = template.replace(/POS/g,(i+1))
//         .replace(/EQUATION/g,`${i}^2`)
//         .replace(/RESULT/g,`${Math.pow(i,2)}`);
//     content += entry;
//     if( i < 10001){
//         setTimeout( go,0 )
//     }
//     else{
//         content += `
//         </div></div>`
//         document.getElementById('content').innerHTML = content;
//     }
// }

// go()

// if(`serviceworker` in navigator){
//     navigator.serviceWorker.register('/serviceworker.js');
// }
// var button = document.querySelector('#notif');
// button.addEventListener('click', function(e){
//     Notification.requestPermission().then(function(result){
//         if(result == 'granted'){
//             randomNotification();
//         }
//     })
// })

// function randomNotification() {
//     var notifTitle = 'Notification Title';
//     var notifBody = 'This is the notification body!';
//     var notifImg = 'data/img/test.jpg';
//     var options = {
//         body: notifBody,
//         icon: notifImg
//     }
//     var notif = new Notification(notifTitle, options);
    
// }