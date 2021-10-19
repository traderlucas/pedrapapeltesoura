// toogle das regras
const regras = document.querySelector('.regras')
const hide = document.querySelector('.hide')

regras.addEventListener('click', () =>{
   hide.classList.toggle('show')
});



// Codigo do Jogo
const game = () => {
   let pScore = 0;
   let cScore = 0;

   const playMatch = () => {
      const options = document.querySelectorAll('.options button');
      const playerHand = document.querySelector('.player');
      const computerHand = document.querySelector('.computer');
      const hands = document.querySelectorAll('.hands img')
      
      hands.forEach(hand =>{
         hand.addEventListener('animationend', function() {
            this.style.animation = "";
         });
      });
      
      //computer options
      const computerOptions = ['Pedra','Papel','Tesoura','Lagarto','Spock']

      options.forEach(option =>{
         option.addEventListener("click",function(){
            //Computer Choice
            const computerNumbers = Math.floor(Math.random()*5);
            const computerChoice = computerOptions[computerNumbers];
            playerHand.src = `assets/img/pedra.png`
            computerHand.src = `assets/img/pedra.png`
            
            setTimeout(() => {
               //Here is where we call compare hands
              console.log(this.textContent);
              compareHands(this.textContent, computerChoice);
               //Update Images
               playerHand.src = `assets/img/${this.textContent}.png`
               computerHand.src = `assets/img/${computerChoice}.png`
             }, 1000);
            //Atualizar imagens
            playerHand.style.animation = "shakePlayer 1s ease"
            computerHand.style.animation = "shakeComputer 1s ease"
         });
      });
   };

   const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };

   const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const vencedor = document.querySelector(".vencedor");
      //empate
      if(playerChoice === computerChoice){
         vencedor.textContent = "Empate";
         return;
      }
      //pedra
      if(playerChoice === "Pedra"){
         if(computerChoice ==="Tesoura" || computerChoice ==="Lagarto"){
            vencedor.textContent = "Você venceu";
            pScore++;
            updateScore();
            return;
         } else {
            vencedor.textContent = "Você perdeu";
            cScore++;
            updateScore();
            return;
         }
      }
      //papel
      if(playerChoice === "Papel"){
         if(computerChoice === "Pedra" || computerChoice === 'Spock'){
         vencedor.textContent = "Você venceu";
            pScore++;
            updateScore();
            return;
         } else {
            vencedor.textContent = "Você perdeu";
            cScore++;
            updateScore();
            return;
         }
      }
      //tesoura
      if(playerChoice === "Tesoura"){
         if(computerChoice ==="Papel" || computerChoice==="Lagarto"){
         vencedor.textContent = "Você venceu";
            pScore++;
            updateScore();
            return;
         } else {
            vencedor.textContent = "Você perdeu";
            cScore++;
            updateScore();
            return;
         }
      }
      //lagarto
      if(playerChoice ==="Lagarto"){
         if(computerChoice ==="Papel" || computerChoice ==="Spock"){
         vencedor.textContent = "Você venceu";
            pScore++;
            updateScore();
            return;
         } else {
            vencedor.textContent = "Você perdeu";
            cScore++;
            updateScore();
            return;
         }
      }
      //spock
      if(playerChoice ==="Spock"){
         if(computerChoice ==="Pedra" || computerChoice ==="Tesoura"){
         vencedor.textContent = "Você venceu";
            pScore++;
            updateScore();
            return;
         } else {
            vencedor.textContent = "Você perdeu";
            cScore++;
            updateScore();
            return;
         }
      }
   };

   playMatch();
};

game();