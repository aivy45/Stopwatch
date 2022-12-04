let seconds =0; 
let minutes =0; 
let hours = 0; 

let displaySeconds =0;
let displayMinutes =0; 
let displayHours = 0;


function StartWatch(){
    seconds++; 
    if(seconds/60===1)
    {
        seconds=0; 
        minutes++;

        if(minutes/60===1)
        {
            minutes=0; 
            hours++;
        }
    }

    if(seconds < 10)
    {
        displaySeconds = '0' + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10)
    {
        displayMinutes = '0' + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours<10)
    {
        displayHours = '0'+hours.toString(); 
    }
    else{
        displayHours = hours;
    }





document.querySelector("#display").innerHTML=displayHours + ":"+ displayMinutes+":"+ displaySeconds;
   
   
}

let status = "Stopped";
let interval = '';


// start the clock 
function startStop(){
    
    if(status == "Stopped")
    {
    let tic =  document.querySelector("#handler");
       interval= setInterval(StartWatch, 1000);       
        status="Started";     

    }
   
}


// stop the clock 
function stop(){
     if(status == "Started")
    {
        clearInterval(interval); 
        let tic =  document.querySelector("#handler");
        status="Stopped";    
    }
}


// reset the clock 
function Reset(){
    seconds=0; 
    hours =0; 
    minutes=0; 
    window.clearInterval(interval);
    document.querySelector("#display").innerHTML="00:00:00";
    document.querySelector("#handler").innerHTML = "Start";
    status="Stopped";
}

