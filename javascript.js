var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("startreset").onclick = function(){
    
    if(playing == true){
        location.reload();
       }else{
           
           playing = true;
           
           score = 0;
           
           document.getElementById("scorevalue").innerHTML = score;
           
           show("timeremaining");
           
           timeremaining = 60;
           
           document.getElementById("timeremainingvalue").innerHTML = timeremaining;
           
           hide("gameover");
           
           document.getElementById("startreset").innerHTML = "Reset Game";
           
           startCountdown();
           
           generateQA();
       }

}

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining==0){
            stopCountdown();
            show("gameover");
            
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is " + score + ".</p>"
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
        }
    }, 1000);
}

function stopCountdown(){
    clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function show(Id){
    document.getElementById(Id).style.display = "block";
}

function generateQA(){
    var x = 1+Math.round(9*Math.random());
    var y = 1+Math.round(9*Math.random());
    
    correctAnswer = x*y;
    
    document.getElementById("question").innerHTML = x + "x" + y;
    
    var correctPosition = 1+Math.round(3*Math.random());
    
   document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
    
    for(i=1; i<5; i++){
        if(i !== correctPosition){
            var wrongAnswer = (1+ Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
            document.getElementById("box" +i).innerHTML = wrongAnswer;
        }
    }
}