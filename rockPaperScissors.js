const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Input not valid');
  }
};

const getComputerChoice = () => {
  number = Math.floor(Math.random() * 3);
  switch(number){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
               };
};

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'Result = Tie';
  } 
  
  else if (userChoice === 'rock'){
    if (computerChoice === 'scissors'){
      return 'Result: User Wins';
    } else {
      return 'Result: Computer Wins';
    }
  }
  
  else if (userChoice === 'paper'){
    if (computerChoice === 'rock'){
      return 'Result: User Wins';
    } else {
      return 'Result: Computer Wins';
    }
  }
  
  else if (userChoice === 'scissors'){
    if (computerChoice === 'paper'){
      return 'Result: User Wins';
    } else {
      return 'Result: Computer Wins';
    }
  }
  
  else if (userChoice === 'bomb'){
    return 'Result: UserCheater Wins';
  }
}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  console.log(`User choosed ${userChoice}`);
  
  let computerChoice = getComputerChoice();
  console.log(`Computer choosed ${computerChoice}`);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();