function run(){
    let html_code = document.getElementById("html");
    let css_code = document.getElementById("css");
    let js_code = document.getElementById("js");
    let output= document.getElementById("output");

    output.contentDocument.body.innerHTML=html_code.value+ "<style>"+ css_code.value+ "</style>";

    output.contentWindow.eval(js_code.value);

    
}

function cleartext_html(){

    let text_area=document.getElementById("html");
    text_area.value="";
    cleartext_output() ;


}
function cleartext_css(){

    let text_area=document.getElementById("css");
    text_area.value="";


}function cleartext_js(){

    let text_area=document.getElementById("js");
    text_area.value="";


}
function cleartext_output() {
    let output = document.getElementById("output");
    let outputDocument = output.contentDocument || output.contentWindow.document;
    outputDocument.body.innerHTML = "";
} 
function stopTimer() {
    isTimerRunning = false;
    clearInterval(timer);
    document.getElementById('startButton').classList.remove('hidden-text');
        document.getElementById('timerDisplay').textContent = '';
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimer(); 
}
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isTimerRunning = false;

function toggleTimer() {
    if (isTimerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    isTimerRunning = true;
    document.getElementById('startButton').classList.add('hidden-text');
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (!isTimerRunning) {
        return;
    }

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    document.getElementById('timerDisplay').textContent = formattedTime;
}


function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
