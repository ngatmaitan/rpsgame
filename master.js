var result;
var userchoice;
var userwins = 0;
var botwins = 0;

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
	var elt = document.getElementById("botchoice");
  if (botchoice == 0){
  	elt.innerHTML = "Rock";
  }
  else if (botchoice == 1){
  	elt.innerHTML = "Paper";
  }
  else{
  	elt.innerHTML = "Scissors";
  }
}

function displayResult(res){
	document.getElementById("result").innerHTML = res;
	document.getElementById("userwins").innerHTML = userwins;
  document.getElementById("botwins").innerHTML = botwins;
}

function play(userinput){
		var botchoice = Math.floor(Math.random() * 3);
    displayBotChoice(botchoice);
    document.getElementById("userchoice").innerHTML = userinput.innerHTML;
		
    result = (3 + userinput.value - botchoice) % 3;
    if (result == 1){
    		userwins++;
        return displayResult("user wins");
    }
    else if (result == 2){
    		botwins++;
        return displayResult("bot wins");
    }
    else{
        return displayResult("it's a tie");
    }
}