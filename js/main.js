let slotImages = ['😍', '🤩', '😢'];

let bank = 20;

function randomSlotImg() {
    
     const randomImg= Math.floor(Math.random() *3);
    
   return slotImages[randomImg]
   
}
console.log(randomSlotImg())
 //function placeBet(){

 const slotSpot ={
    img1: document.querySelector('#img1'),
    img2: document.querySelector('#img2'),
    img3: document.querySelector('#img3')
 }

 
let randomSlotImg 
 

//let betButton = document.querySelector('button')
//let restartButton = document.querySelector('#restart')


betButton.addEventListner('click')



// need random function using math.floor & math.random
//init function (what starts the game)
//reset function 
// conditional into a game play function
//call get random imgs if all 3 images match with money in bank the player win
// if player reaches 0 in bank then player lose
// once player wins/lose alrert comes up with player wins or lose
