let slotImages = ['😍', '🤩', '😢'];

let bank = prompt('Enter amount to put into your bank');
document.querySelector('#bank').innerText = bank

function randomSlotImg() {
    
     const randomImg= Math.floor(Math.random() *3);
    
   return slotImages[randomImg]
   
}
console.log(randomSlotImg())

function placeBet(){
   bank -= 10
   document.querySelector('#bank').innerText = bank
}

 const slotSpot ={
    img1: document.querySelector('#img1'),
    img2: document.querySelector('#img2'),
    img3: document.querySelector('#img3')
 }

 let counter = 0;

function spinNewImg(){
   
      setTimeout(function(){

         slotSpot.img1.innerText = randomSlotImg()
         slotSpot.img2.innerText = randomSlotImg()
         slotSpot.img3.innerText = randomSlotImg()
         counter++;
         console.log(counter)
         if(counter < 25){
            spinNewImg()
         }else{
            counter = 0
            if(slotSpot.img1.innerText === slotSpot.img2.innerText && slotSpot.img2.innerText === slotSpot.img3.innerText){
               document.querySelector('#msg').innerText = "YOU WON!"
               
               
            }else{
               document.querySelector('#msg').innerText = "TRY AGAIN"
            }

         }

      },100)

   }
     


function resetCounter(){
   counter = 0
}




let bankTotal = document.querySelector('#bank')
let betButton = document.querySelector('#bet')
let restartButton = document.querySelector('#restart')
let spinButton = document.querySelector('#spin')


spinButton.addEventListener('click', spinNewImg)
restartButton.addEventListener('click', resetCounter)
betButton.addEventListener('click',placeBet)


// need random function using math.floor & math.random
//init function (what starts the game)
//reset function 
// conditional into a game play function
//call get random imgs if all 3 images match with money in bank the player win
// if player reaches 0 in bank then player lose
// once player wins/lose alrert comes up with player wins or lose
