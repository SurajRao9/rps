var roundNumber = 0;
var userScore = 0;
var computerScore = 0;

function randomThrow(){
  var throws = ['rock', 'paper', 'scissors'];
  var randomIndex = Math.floor(Math.random() * 3);
  return throws[randomIndex];
}

function playRound(userThrow){
  var computerThrow = randomThrow();
  var result;
  console.log("Computer Throws" + computerThrow);
  console.log("User Throws" + userThrow);
  if (userThrow == computerThrow) {
    result = 'Tie'
  } else if ((userThrow == "rock" && computerThrow == "scissors") ||
            (userThrow == "paper" && computerThrow == "rock") ||
            (userThrow == "scissors" && computerThrow == "paper")){
    result = "player win"
    userScore +=1;
  } else {
    result = "computer win"
    computerScore +=1;
  }
  roundNumber +=1;
  $('#computer-score').text(computerScore);
  $('#user-score').text(userScore);
  $('tbody').append(`<tr><td>$(roundNumber)</td><td>$(userThrow)</td><td>$(computerThrow)</td><td>$(result)</td><td>$(userScore)-$(compuuterScore)</td></tr>`)
}

$('#rock').click(function(){
  playRound('rock');
});

$('#paper').click(function(){
  playRound('paper');
});

$('#scissors').click(function(){
  playRound('scissors');
});
