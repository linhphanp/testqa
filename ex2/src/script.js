function getCountdown(){
var countDownDate = new Date("Jan 23, 2023 00:00:00").getTime();
var now = new Date().getTime();   
  var countDown = (countDownDate - now)/1000;
  var days = Math.floor(countDown /(60 * 60 * 24));
  var hours = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
  var minutes = Math.floor((countDown % (60 * 60)) / 60);
  var seconds = Math.floor(countDown % 60);

document.getElementById("countdown").innerHTML = " Còn " + days + " ngày " + hours + " giờ "
  + minutes + " phút " + seconds + " giây là đến tết";
 };
setInterval(getCountdown, 1000);

 