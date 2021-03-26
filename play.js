let useChoice, computerChoice;

    const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          userChoice=button.id;
          computerChoice = (["paper","scissors","rock"])[Math.random() * 3 | 0];
          playRound();
        })
        
      });
 
    const resultsArea = document.querySelector('#resultsArea');

    const round = document.createElement('div');
      round.classList.add('round');

    const scoreArea = document.createElement('div');
      scoreArea.classList.add('scoreArea')

    const gameScore = document.createElement('h2');
    
    const resetButton = document.createElement('button');
      resetButton.textContent = "Reset!";
      resetButton.setAttribute('id', 'resetButton')
      //resetButton.style.visibility = 'hidden';
    

    //play 5 round game 
    function game(win){
      let computerScore = 0;
      let playerScore = 0;
      let draws = 0;
      for (let i = 0; i < 5; i++){

        let win = playRound();
        switch (win){
          case 1: 
            playerScore++;
          break;
          case 2: 
            computerScore++;
          break;
          case 3: 
            draws++;
          break;
        }
        //alert(`win ${win} playerScore ${playerScore} computerscore ${computerScore} round ${i}`)
      }

      //add disable play button and reset button

      if(computerScore > playerScore){
        alert(`Oh no! you lost ${computerScore} to ${playerScore}. ${draws} draws.`);
      }else if (playerScore > computerScore){
        alert(`Well done! you won ${playerScore} to ${computerScore}.  ${draws} draws.`);
      }
    }
     

    //compare user and computer choice
    function playRound(playerSelection, computerSelection) {
      playerSelection = userChoice;
      computerSelection = computerChoice;
      let playerWin;
      

      switch (playerSelection){
        case computerSelection:
          playerWin = 3;
        break;
        case "rock":
          if (computerSelection == "scissors"){
            playerWin = 1;
          } else if (computerSelection == "paper"){
            playerWin = 2;
          }
        break;
        case "paper":
          if (computerSelection == "rock"){
            playerWin = 1;
          } else if (computerSelection == "scissors"){
            playerWin = 2;
          }
        break;
        case "scissors":
          if (computerSelection == "paper"){
            playerWin = 1;
          }else if (computerSelection == "rock"){
            playerWin =2;
          }
        break;
      }

      switch(playerWin){
        case 1:
          round.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
          return playerWin;
        break;
        case 2: 
        round.textContent = `You loose! ${computerSelection} beats ${playerSelection}`;
          return playerWin;
        break;
        case 3: 
        round.textContent = `WOW! ${playerSelection} vs ${computerSelection} it's a draw!`;
          return playerWin;
        break;
      }

      
      
    };

    resultsArea.appendChild(round);
    resultsArea.appendChild(scoreArea);
    resultsArea.appendChild(resetButton);