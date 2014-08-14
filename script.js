$(document).ready(function(){
    var playerMoney = 30;
  $("#play").on("click",function(){

    var randomNumber = Math.floor(Math.random() * 10) +1

    console.log("random number:"+randomNumber);
   
    var bet = Number($("#bet").val());
    console.log("bet:"+bet);
    // prompt("enter a bet of 5 or 10 dollars")

    var guess = Number($("#guess").val());
    console.log("guess:"+guess);

      // prompt("guess a number from 1 to 10")
      // while (playerMoney>0){
      console.log("money left:"+playerMoney);
      if(parseInt(guess) === randomNumber){
        playerMoney=(playerMoney + parseInt(bet));
        // alert("you guessed right and have"+ playerMoney +" dollars !");
      }
      else{
        playerMoney=(playerMoney - parseInt(bet));
        if(playerMoney <= 0){
          false;
          console.log("you are out of money")
 
        };
        // alert("you guessed wrong"+playerMoney +" dollars !");
      };
$("#total").text("You have $"+playerMoney+" to play with");
 
});
});


