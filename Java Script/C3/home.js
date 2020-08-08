function rps(YourChoice){
    console.log(YourChoice);

   var humanChoice,ButChoice;
    humanChoice=YourChoice.id;

ButChoice=numberToChoice(randrpsint());
console.log('Computer choice',ButChoice);

    result = decideWinner(humanChoice,ButChoice);
    console.log(YourChoice);

   message = finalMessage(result); //{'message'='you win' 'color'='yellow')
   console.log(message);
  rpsgame(YourChoice.id,ButChoice,message);

}
function randrpsint(){
   return Math.floor(Math.random() *3);
    
}
function numberToChoice(number){
    return ['rock','paper','scissor'](number)
}
function decideWinner(YourChoice,computerchoice){
   var rpsdatabase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper' :{'scissors':0,'rock':1,'paper':0.5},
        'scissors' :{'scissors':0.5,'rock':0,'paper':1}
    }
  var  yourScore= rpsdatabase[YourChoice][computerchoice]
  var  computerScore= rpsdatabase[YourChoice][computerchoice]
  
return(yourScore,computerScore);

    
}
function finalMessage([yourScore,computerScore]){
if (yourScore==0){
    return {'message':'you lost!','color':'red'};

}
else if(yourScore==0.5){
    return{'message':'you tied!','color':'yellow'};

}
else{
    return{'message':'you win!','color':'green'};
}
}
function rpsfrontend(humanimageChoice,ButimageChoice,finalMessage){
    var imagesdatabase={
        'rock':document.getElementById('Rock').src,
        'paper':document.getElementById('Paper').src,
        'scissor':document.getElementById('Scissors').src,
    }
    document.getElementById('Rock').remove(),
    document.getElementById('Paper').remove(),
    document.getElementById('Scissors').remove();

    var humanDiv=document.createElement('div');
    var butDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

 
    humanDiv.innerHTML="img src='" = imagesdatabase[humanimageChoice] +"' style=' box-shadow: 0px 10px 50px rgba(37, 58, 233, 1);'>"
    messageDiv.innerHTML="<h1 style='color:" + finalMessage['color'] +"; font-size=60px; padding:30px;'>"+finalMessage['message']+"</h1>"
    butDiv.innerHTML="img src='" = imagesdatabase[humanimageChoice] +"' style=' box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
 
    document.getElementById('flex-box-rps-div').appendChild(butDiv);
}