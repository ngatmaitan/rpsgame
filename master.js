var result;
var userchoice;
var userwins = 0;
var botwins = 0;
var ties = 0;
var total = 0;
var minutes = 0;
var seconds = 0;
var yourUl = document.getElementById("yourUlId");
    
    document.getElementById("submit").addEventListener("click", function(){
    minutes = document.getElementById("minutes").value;
    seconds = document.getElementById("seconds").value;
    total = Number(minutes*60) + Number(seconds);
    
    var display = document.querySelector('#time'),
        timer = new CountDownTimer(Number(total)),
        timeObj = CountDownTimer.parse(Number(total));
        
        format(timeObj.minutes, timeObj.seconds);
    
    timer.onTick(format);
    
    timer.start();
    
    function format(minutes, seconds) {
        if (minutes === 0 && seconds === 10){
          document.getElementById("warning").style.display = '';
        }
        else if (minutes === 0 && seconds === 7){
          document.getElementById("warning").style.display = 'none';
        }
        else if (minutes === 0 && seconds === 0){
          if (userwins > botwins){
            document.getElementById("winner").innerHTML = "user won.";
          }
          else if (userwins < botwins){
            document.getElementById("winner").innerHTML = "bot won.";
          }
        }

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    }
});

document.getElementById("rock").addEventListener("click", function(){
    play(this);
});

document.getElementById("paper").addEventListener("click", function(){
    play(this);
});

document.getElementById("scissors").addEventListener("click", function(){
    play(this);
});

function displayBotChoice(botchoice){
  if (botchoice == 0){
    document.getElementById("botchoice").innerHTML = "Rock";
  }
  else if (botchoice == 1){
    document.getElementById("botchoice").innerHTML = "Paper";
  }
  else{
    document.getElementById("botchoice").innerHTML = "Scissors";
  }
}

function play(userinput){
    var botchoice = Math.floor(Math.random() * 3);
    displayBotChoice(botchoice);
    document.getElementById("userchoice").innerHTML = userinput.innerHTML;
    
    result = (3 + userinput.value - botchoice) % 3;
    if (result == 1){
        userwins++;
        document.getElementById("userwins").innerHTML = userwins;
    }
    else if (result == 2){
        botwins++;
        document.getElementById("botwins").innerHTML = botwins;
    }
    else{
        ties++;
        document.getElementById("ties").innerHTML = ties;
    }
}