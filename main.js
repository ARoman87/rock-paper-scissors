let rockValue = document.getElementById("rock");
let paperValue = document.getElementById("paper");
let scissorValue = document.getElementById("scissors");
let userMessage = document.getElementById("player-message");
let userScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let tryAgainButton = document.getElementById("try");
let readyButton = document.getElementById("readyButton");
let computerImage = document.getElementById("compImage");
let computerSide = document.getElementById("computerSide");
let scroll = document.querySelectorAll(".scroll");
let imageScroll = document.getElementById("imgScroll");
let uScore = 0;
let compScore = 0;


const choices = ["rock", "paper", "scissors"];

const computerChoice = () => {
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
};


function game(userChoice) {
    let computer = computerChoice()
    if (readyButton.innerHTML == "⦿ ⦿ ⦿") {
        if (uScore < 5 && compScore < 5) {
            if (userChoice === "rock" && computer === "scissors") {
                uScore++
                userScore.innerHTML = uScore;
                userMessage.innerHTML = "You Win with Rock!";
                computerImage.src = "./images/scissors.png";
                imageScroll.style.display = "none";
            }
            else if (userChoice === "paper" && computer === "rock") {
                uScore++
                userScore.innerHTML = uScore;
                userMessage.innerHTML = "You Win with Paper!";
                computerImage.src = "./images/rock.png";
                imageScroll.style.display = "none";
            }
            else if (userChoice === "scissors" && computer === "paper") {
                uScore++
                userScore.innerHTML = uScore;
                userMessage.innerHTML = "You Win with Scissors!";
                computerImage.src = "./images/paper.png";
                imageScroll.style.display = "none";
            }
            else if (userChoice === "rock" && computer === "rock" || userChoice === "paper" && computer === "paper" || userChoice === "scissors" && computer === "scissors") {
                userMessage.innerHTML = "Tie!";
                imageScroll.style.display = "none";
                if(computer === "rock"){
                    computerImage.src = "./images/rock.png";
                    
                }
                else if (computer === "paper") {
                    computerImage.src = "./images/paper.png";
                }
                else {
                    computerImage.src = "./images/scissors.png"
                }
                
            } 


            else if (userChoice === "rock" && computer === "paper") {
                compScore++
                computerScore.innerHTML = compScore;
                userMessage.innerHTML = "Computer Wins!";
                computerImage.src = "./images/paper.png";
                imageScroll.style.display = "none";
            }
            else if (userChoice === "paper" && computer === "scissors") {
                compScore++
                computerScore.innerHTML = compScore;
                userMessage.innerHTML = "Computer Wins!";
                computerImage.src = "./images/scissors.png"
                imageScroll.style.display = "none";
            } 
            else if (userChoice === "scissors" && computer === "rock") {
                compScore++
                computerScore.innerHTML = compScore;
                userMessage.innerHTML = "Computer Wins!";
                computerImage.src = "./images/rock.png"
                imageScroll.style.display = "none";
            }
        }
    }

    if (uScore === 5) {
        userMessage.innerHTML = "YOU WON!"
        userMessage.style.color = "green"
    } else if (compScore === 5) {
        userMessage.innerHTML = "YOU LOST! Computer Wins!"
        userMessage.style.color = "red"
    }
    if (uScore === 5 || compScore === 5) {
        tryAgainButton.style.display = "block";
        readyButton.style.display = "none";
    }
}



function main() {
    
        rockValue.addEventListener("click", function() {
            if (readyButton.innerHTML === "⦿ ⦿ ⦿") {
                game("rock");
                readyButton.innerHTML = "Again?"
            }
    
        })
        paperValue.addEventListener("click", function() {
            if (readyButton.innerHTML === "⦿ ⦿ ⦿") {
                game("paper");
                readyButton.innerHTML = "Again?"
            }
        })
        scissorValue.addEventListener("click", function() {
            if (readyButton.innerHTML === "⦿ ⦿ ⦿") {
                game("scissors");
                readyButton.innerHTML = "Again?"
            }
        })
    
    

    tryAgainButton.addEventListener("click", function() {
        userScore.innerHTML = 0
        uScore = 0
        computerScore.innerHTML = 0
        compScore = 0
        userMessage.innerHTML = ""
        tryAgainButton.style.display = "none"
        readyButton.style.display = "inline";
        readyButton.innerHTML = "Ready?";
        computerImage.src = "./images/RPS.png";
        userMessage.style.color = "white"
    })
    readyButton.addEventListener("click", function() {
        const nextImageDelay = 100;
        let currentImageCounter = 0;
        readyButton.innerHTML = "⦿ ⦿ ⦿";
        userMessage.innerHTML = "";
        

        scroll[currentImageCounter].style.display = "block";

        setInterval(nextImage, nextImageDelay);

        function nextImage() {
            scroll[currentImageCounter].style.display = "none";
            currentImageCounter = (currentImageCounter + 1) % scroll.length;
            scroll[currentImageCounter].style.display = "block";  
        }
        imageScroll.style.display = "block";
        computerImage.src = ""
        
        })

}

main()


