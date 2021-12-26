const timer=document.querySelector("body #timer");

function DdayTimer(){
const dDay=new Date("2021-12-25:00:00:00+0900");
const date=new Date();
const gap=dDay-date;
const sec = Math.floor((gap / 1000) % 60);
const min = Math.floor((gap / 1000 / 60) % 60);
const hour = Math.floor(gap / 1000 / 60 / 60) % 24;
const day = Math.floor(gap / 1000 / 60 / 60 / 24);
timer.innerText=`크리스마스 까지 ${day}일 ${hour}시간 ${min}분 ${sec}초 남았습니다.`;

}

DdayTimer();
setInterval(DdayTimer,1000);