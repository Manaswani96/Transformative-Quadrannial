const start=document.getElementById("start"); 
const stop=document.getElementById("stop"); 
const reset=document.getElementById("reset"); 
const timer=document.getElementById("timer"); 

let timeLeft =1500;
let interval;

const updateTimer=()=>{
    const minutes=Math.floor(timeLeft /60);
    const seconds=timeLeft % 60;
    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

};
const startTimer=()=>{
    if (interval) return;
     interval=setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft==0){
            alert("Time's up");
            timeLeft=1500;
            updateTimer(); 
        }
     },1000);
};
const stopTimer = () => {
    clearInterval(interval);
    interval = null;
};


const  resetTimer = () =>{
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
}
timer.addEventListener("click", () => {
    const input = prompt("Enter time (mm:ss):", "25:00");
    
    if (input) {
        const parts = input.split(":");
        if (parts.length === 2) {
            const min = parseInt(parts[0]);
            const sec = parseInt(parts[1]);

            if (!isNaN(min) && !isNaN(sec) && min >= 0 && sec >= 0 && sec < 60) {
                timeLeft = min * 60 + sec;
                updateTimer();
                clearInterval(interval);
                interval = null;
            } else {
                alert("Please enter a valid time in mm:ss format.");
            }
        } else {
            alert("Please use the format mm:ss (e.g., 10:30).");
        }
    }
});


start.addEventListener("click",startTimer); 
stop.addEventListener("click",stopTimer); 
reset.addEventListener("click",resetTimer); 
updateTimer();
