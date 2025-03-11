let counter;
let times=0;
function startTime(){
    if(!counter){
        counter = setInterval(() => {
            if(times<30){
                times+=3;
                document.getElementById('timer').textContent = times;
            }
            else{
                stopTime();
            }
        }, 3000);
    }
}

function stopTime(){
    clearInterval(counter);
    counter = null;
}

function resetTime(){
    times = 0;
    document.getElementById('timer').textContent = times;
    stopTime();
}