let blackjackGame = {
    'you': {'scoreSpan':'#your-blackjack-result','div':'#your-box','score': 0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score': 0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{ '2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9,'10': 10,'K':10,'J':10,'Q':10,'A':[1,11]},
'wins':0,
'loses':0,
'draw':0,

};
const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');



document.querySelector('#hit').addEventListener('click',blackjackhit);
document.querySelector('#stand').addEventListener('click',dealerLogic);
document.querySelector('#deal').addEventListener('click',blackjackDeal);

function blackjackhit(){
    let card =randomCard();
    console.log(card);
  showCard(card, YOU);
  updateScore(card, YOU);
  showScore(YOU);
  showResult(); 

  if (DEALER['score']>15){
      let winner = computeWinner();
      showResult(winner);
  }

  console.log(YOU['score']);
}
function randomCard(){
    let randomIndex=Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}
function showCard(card,activePlayer){
    if(activePlayer['score']<=21){
let cardImage = document.createElement('img');
  cardImage.src=`images/${card}.png` ; 
  document.querySelector(activePlayer['div']).appendChild(cardImage);
  hitSound.play();
    }
}
function blackjackDeal(){
    let winnner =computeWinner();
    showResult(winnner);
    let yourImage = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');
    
    for(i=0;i<yourImage.length;i++){
        yourImage[i].remove();
    }
       
        for(i=0;i<dealerImage.length;i++){
            dealerImage[i].remove();
            
    }
    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color='ffffff';
    document.querySelector('#dealer-blackjack-result').style.color='ffffff';
    document.querySelector('#blackjack-result').textContent="Let's play";
    document.querySelector('#blackjack-result').style.color="black;"

}
function updateScore(card,activePlayer){
    if (card=== 'A'){
    if (activePlayer['score'] +blackjackGame['cardsMap'][card][1] <= 21 ){
        activePlayer['score'] +=blackjackGame['cardsMap'][card][1];

    }
    else{
        activePlayer['score'] +=blackjackGame['cardsMap'][card][0];
  
    }
}
else{
    activePlayer['score'] += blackjackGame['cardsMap'][card];
}
}
function showScore(activePlayer){
    if (activePlayer['score']> 21){
        document.querySelector(activePlayer['scoreSpan']).textContent='BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color='red';
    }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
}
}
function dealerLogic(){
    let card= randomCard();
    showCard(card,DEALER);
    updateScore(card,DEALER);
    showScore(DEALER);
}
function computeWinner(){
    let winner;
    if(YOU['score']<=21){
        if(YOU['score']>DEALER['score'] || (DEALER['score'] > 21)){
        blackjackGame['wins']++;
        winner=YOU;
        }
        else if (YOU['score']< DEALER['score']){
        blackjackGame['loses']++;
        winner=DEALER;
}
else if(YOU['score'] === DEALER['score']){
blackjackGame['draw']++;
    
}
}
else if (YOU['score'] > 21 && DEALER['score']<=21){
blackjackGame['loses']++;
winner=DEALER;
}
else if (YOU['score'] > 21 && DEALER['score']>21){
blackjackGame['draw']++;
    
}
console.log(blackjackGame);
return winner;

    }
    function showResult(winner){
        let message, messageColor;

        if (winner === YOU){
            document.querySelector('#wins').textContent=blackjackGame['wins'];
            message='You Won!';
            messageColor='green';
            winSound.play();
        }
      else  if (winner === DEALER){
        document.querySelector('#loses').textContent=blackjackGame['loses'];
            message='You Lost!';
            messageColor='red';
            lossSound.play();
        }
        else{
        document.querySelector('draw').textContent = blackjackGame['draw'];
            message='You Drew!';
            messageColor='black';
            
        }
        document.querySelector('#blackjack').textContent=message;
        document.querySelector('#blackjack').style.color=messageColor;
    }
