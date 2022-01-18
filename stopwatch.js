const hour = document.getElementById("hr");
const minute = document.getElementById("min");
const second = document.getElementById("sec");
const msecond = document.getElementById("msec");
const startbtn = document.getElementById("startbtn");
const resetbtn = document.getElementById("resetbtn");
const lapbtn = document.getElementById("lapbtn");
const lapRecord = document.getElementById('lapRecord');

let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;

let interval = null;

let status = "stopped"

let lap = null;

function startTime(){
    if(status === "stopped"){
        interval = setInterval(start,10)
        startbtn.innerHTML = "Stop";
        status = "started";
    }
    else{
        clearInterval(interval)
        startbtn.innerHTML = "Start";
        status = "stopped";
    }
    
}
function resetTime(){
    clearInterval(interval);
    hr = 00;
    min = 00;
    sec = 00;
    msec = 00;
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    msecond.innerHTML = "00";

}
function lapTime(){
          lap = `<div class="lap"> ${hr} : ${min} : ${sec} : ${msec}</div>`;
          lapRecord.innerHTML += lap
}

function start(){
    msec++
    if(msec < 10){
        msecond.innerHTML = "0" + msec;
    }
    if(sec < 10){
        second.innerHTML = "0" + sec;
    }
    if(min < 10){
        minute.innerHTML = "0" + min;
    }
    if(hr < 10){
        hour.innerHTML = "0" + hr;
    }

        if(msec / 100 === 1){
            sec++;
            second.innerHTML = sec;
            msec = 0;
            msecond.innerHTML = msec;
        }
        if(sec / 60 === 1){
            min++
            minute.innerHTML = min;
            sec = 0;
            second.innerHTML = sec;
        }
        if(min / 60 === 1){
            hr++
            hour.innerHTML = hr;
            min = 0;
            minute.innerHTML = min;
        } 
}



startbtn.addEventListener("click", startTime);
resetbtn.addEventListener("click", resetTime);
lapbtn.addEventListener("click",lapTime)