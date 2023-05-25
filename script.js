const playBtn = document.querySelector('.intro button');
const introScreen = document.querySelector('.intro');
const match = document.querySelector('.match');

let pScore = 0;
let cScore = 0;


playBtn.addEventListener('click', () => {
    introScreen.classList.add('unactive');
    match.classList.add('active');
});

//Play Match Function
function playMatch(){
    const options = document.querySelectorAll('.options button');
    const computerOptions = ['rock', 'paper', 'scissors'];
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    options.forEach(option => {
        option.addEventListener('click', function(){
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            
            setTimeout(() => {
                //call compare hads function
                computerHands(this.textContent, computerChoice);
                
                playerHand.src = `${this.textContent}.png`;
                computerHand.src = `${computerChoice}.png`;
            }, 2000);

            //Working on animation
            playerHand.style.animation = 'shakePlayer 2s ease';
            computerHand.style.animation = 'shakeComputer 2s ease';
        });
    });

    hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
            this.style.animation = "";
        });
    });
}
playMatch();

//Compare Hands Function
function computerHands(playerChoice, computerChoice){
    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice){
        winner.textContent = 'It is a Tie';
        return;
    }
    if(playerChoice === 'rock'){// checking for rock
        if(computerChoice === 'scissors'){
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = 'Computer Wins';
            cScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice === 'paper'){// checking for paper
        if(computerChoice === 'scissors'){
            winner.textContent = 'Computer Wins';
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice === 'scissors'){// checking for scissors
        if(computerChoice === 'rock'){
            winner.textContent = 'Computer Wins';
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        }
    }
}

//Score Function
function updateScore(){
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}