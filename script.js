const waiter = document.getElementsByClassName("waiter");
const userWaiter = document.getElementById("user-waiter");
const compWaiter = document.getElementById("comp-waiter");
const userScoreBoard = document.getElementById("user-score");
const compScoreBoard = document.getElementById("comp-score");
const msgBox = document.getElementById("msg");
const options = [ ["rock", "👊"], ["scissors", "✌"], ["paper", "🖐"] ];
let userScore = 0;
let compScore = 0;

const comp = () => options[Math.floor( Math.random() * 3 )];
const animate = (state) => {
  let status = null;
  if ( state === "on" ) {
    status = "bounce 1s";
  }
  else {
    status = "unset";
  }
  waiter[0].style.animation = status;
  waiter[1].style.animation = status;
};
function style(status, client) {
  let color = null;
  let msg = "Make your move!";

  if ( status === "draw" ) {
    color = "#7f8c8d";
    compWaiter.parentNode.style.border = `3px solid ${color}`;
    msg = "It's a Draw!";
  }
  else if ( status === "win" ) {
    color = "#2ecc71";
    compWaiter.parentNode.style.border = `3px solid #e74c3c`;
    userScore++;
    msg = "You Won!";
  }
  else {
    color = "#e74c3c";
    compWaiter.parentNode.style.border = `3px solid #2ecc71`;
    compScore++;
    msg = "You Lose!";
  }

  userWaiter.parentNode.style.border = `3px solid ${color}`;
  msgBox.textContent = msg;

  userScoreBoard.textContent = userScore;
  compScoreBoard.textContent = compScore;
}
const check = (parentText, parent) => {
  animate("off");
  let computerAnswer = comp();
  compWaiter.textContent = computerAnswer[1];
  userWaiter.textContent = parent.children[0].textContent;
  if ( parentText == computerAnswer[0] ) {
    style("draw", parent);
  }
  else if ( parentText == "scissors" ) {
    switch (computerAnswer[0]) {
      case "rock":
        console.log("lose");
        style("lose", parent);
        break;
      case "paper":
        style("win", parent);
    }
  }
  else if ( parentText == "rock" ) {
    switch (computerAnswer[0]) {
      case "paper":
        style("lose", parent);
        break;
      case "scissors":
          style("win", parent);
    }
  }
  else {
    switch (computerAnswer[0]) {
      case "scissors":
        style("lose", parent);
        break;
      case "rock":
          style("win", parent);
    }
  }
};

const scissorsOnClick = (parentText, parent) => {
  animate("on");
  setTimeout(check, 1000, parentText, parent);
};
const rockOnClick = (parentText, parent) => {
  animate("on");
  setTimeout(check, 1000, parentText, parent);
};
const paperOnClick = (parentText, parent) => {
  animate("on");
  setTimeout(check, 1000, parentText, parent);
};