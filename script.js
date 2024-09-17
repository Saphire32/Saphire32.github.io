const checks = document.querySelectorAll(".checkboxen");

function Turns() {
  console.log("turns()")
  
  let PlayerChecks = document.querySelectorAll(".player");
  let PCChecks = document.querySelectorAll(".pc");
  let max = 1;
  
  for (const check of checks) {
    check.onclick = selectiveCheck;
  }
  
  function selectiveCheck(event) {
    let player = document.querySelectorAll(".player:checked")
    let PC = document.querySelectorAll(".pc:checked")
    
    if (!event.target.checked) {
      event.target.checked = true;
      return false;
    }
    if (player.length >= max + 1) {
      return false;
    }
    if (PC.length >= max + 1) {
      return false;
    }
    for (let b = 0; b < max; b++) {
      setTimeout(() =>  {
        let available = document.querySelectorAll(".pc:not(:checked)");
        let randNum = Math.floor(Math.random() * PCChecks.length);
        available[randNum].checked = true;
        checkWinner();
      }, 500);
    }
  }
}

function checkWinner() {
  let plads1 = document.getElementById("plads1");
  let plads2 = document.getElementById("plads2");
  let plads3 = document.getElementById("plads3");
  let plads4 = document.getElementById("plads4");
  let plads5 = document.getElementById("plads5");
  let plads6 = document.getElementById("plads6");
  
  if (plads1.checked == true && plads4.checked == true) {
    WonDraw(++WinDraw);
    setTimeout(() => {
      plads1.checked = false;
      plads4.checked = false;
    }, 1000);
  }
  if (plads1.checked == true && plads5.checked == true) {
    WonPlayer(++WinPlayer);
    setTimeout(() => {
      plads1.checked = false;
      plads5.checked = false;
    },1000);
  }
  if (plads1.checked == true && plads6.checked == true) {
    WonPC(++WinPC);
    setTimeout(() => {
      plads1.checked = false;
      plads6.checked = false;
    },1000);
  }
  if (plads2.checked == true && plads4.checked == true) {
    WonPC(++WinPC);
    setTimeout(() => {
      plads2.checked = false;
      plads4.checked = false;
    },1000);
  }
  if (plads2.checked == true && plads5.checked == true) {
    WonDraw(++WinDraw);
    setTimeout(() => {
      plads2.checked = false;
      plads5.checked = false;
    },1000);
  }
  if (plads2.checked == true && plads6.checked == true) {
    WonPlayer(++WinPlayer);
    setTimeout(() => {
      plads2.checked = false;
      plads6.checked = false;
    },1000);
  }
  if (plads3.checked == true && plads4.checked == true) {
    WonPlayer(++WinPlayer);
    setTimeout(() => {
      plads3.checked = false;
      plads4.checked = false;
    },1000);
  }
  if (plads3.checked == true && plads5.checked == true) {
    WonPC(++WinPC);
    setTimeout(() => {
      plads3.checked = false;
      plads5.checked = false;
    },1000);
  }
  if (plads3.checked == true && plads6.checked == true) {
    WonDraw(++WinDraw);
    setTimeout(() => {
      plads3.checked = false;
      plads6.checked = false;
    },1000);
  }
}

var WinPlayer = 0;

function WonPlayer(winner) {
  document.getElementById("visresultatWonPlayer").value = winner;
}
var WinPC = 0;

function WonPC(winnerPC) {
  document.getElementById("visresultatWonPC").value = winnerPC;
}
var WinDraw = 0;

function WonDraw(winnerDraw) {
  document.getElementById("visresultatWonDraw").value = winnerDraw;
}

var Rounds = 0;

function Rounds(AllRounds) {
  document.getElementById("Rounds").value = AllRounds;
}