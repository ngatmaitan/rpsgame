//most things timer from http://jsfiddle.net/alnitak/aBWce/

var mns = document.getElementById('mns');
var scs = document.getElementById('scs');
var btcnt = document.getElementById('btnct');
var reset = document.getElementById('reset');
var showmns = document.getElementById('showmns');
var showscs = document.getElementById('showscs');
var t;

var count = 0;
var result;
var userchoice;
var userwins = 0;
var botwins = 0;
var ties = 0;

document.getElementById("rock").addEventListener("click", function() {
  play(this);
});

document.getElementById("paper").addEventListener("click", function() {
  play(this);
});

document.getElementById("scissors").addEventListener("click", function() {
  play(this);
});

function pad2(n) {
  return n < 10 ? '0' + n : n;
}

function show() {
  var s = count % 60;
  var m = Math.floor(count / 60);
  if (m === 0 && s === 10) {
    document.getElementById("warning").classList.remove('hidden');
  } else if (m === 0 && s === 7) {
    document.getElementById("warning").classList.add('hidden');
  } else if (m === 0 && s === 0) {
    document.getElementById("rock").classList.add('hidden');
    document.getElementById("paper").classList.add('hidden');
    document.getElementById("scissors").classList.add('hidden');
    document.getElementById("winner").classList.remove('hidden');
    if (userwins > botwins) {
      document.getElementById("winner").innerHTML = "user won.";
    } else if (userwins < botwins) {
      document.getElementById("winner").innerHTML = "bot won.";
    } else {
      document.getElementById("winner").innerHTML = "it's a tie!";
    }
  }
  showmns.innerHTML = pad2(m);
  showscs.innerHTML = pad2(s);
}

function timer() {
  show();
  if (count-- > 0) {
    t = setTimeout(timer, 1000);
  }
}

function setTimer() {
  var s = parseInt(scs.value, 10);
  var m = parseInt(mns.value, 10);
  if (isNaN(s) || isNaN(m)) return;
  scs.value = s;
  mns.value = m;

  var current = count;
  count += (m * 60) + s;

  // only restart the counter loop if it was previously stopped
  if (current <= 0) {
    timer();
  } else {
    show();
  }
}

btcnt.addEventListener('click', function() {
  document.getElementById("rock").classList.remove('hidden');
  document.getElementById("paper").classList.remove('hidden');
  document.getElementById("scissors").classList.remove('hidden');
  setTimer();
});

reset.addEventListener('click', function() {
  document.getElementById("rock").classList.remove('hidden');
  document.getElementById("paper").classList.remove('hidden');
  document.getElementById("scissors").classList.remove('hidden');
  document.getElementById("winner").classList.add('hidden');
  userwins = 0;
  botwins = 0;
  ties = 0;
  count = 0;
  document.getElementById("userwins").innerHTML = userwins;
  document.getElementById("botwins").innerHTML = botwins;
  document.getElementById("ties").innerHTML = ties;
  clearTimeout(t);
  setTimer();
});

function displayBotChoice(botchoice) {
  if (botchoice == 0) {
    document.getElementById("botchoice").innerHTML = "Rock";
  } else if (botchoice == 1) {
    document.getElementById("botchoice").innerHTML = "Paper";
  } else {
    document.getElementById("botchoice").innerHTML = "Scissors";
  }
}

function play(userinput) {
  var botchoice = Math.floor(Math.random() * 3);
  displayBotChoice(botchoice);
  document.getElementById("userchoice").innerHTML = userinput.innerHTML;

  result = (3 + userinput.value - botchoice) % 3;
  if (result == 1) {
    userwins++;
    document.getElementById("userwins").innerHTML = userwins;
  } else if (result == 2) {
    botwins++;
    document.getElementById("botwins").innerHTML = botwins;
  } else {
    ties++;
    document.getElementById("ties").innerHTML = ties;
  }
}
