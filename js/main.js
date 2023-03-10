console.log('js test');

let slotImages = ['😍', '🤩', '😢'];

let bank = 100
document.querySelector('#bank').innerText = bank


// function to show random slot image using Math.floor & Math.random
function randomSlotImg() {
    
     const randomImg= Math.floor(Math.random() *3);
    
   return slotImages[randomImg]
   
}



// select elements to store images for slot
 const slotSpot ={
    img1: document.querySelector('#img1'),
    img2: document.querySelector('#img2'),
    img3: document.querySelector('#img3')
 }

 
 let counter = 0;

// function to randomize images for a time frame and also for when images stop if they match or not display message
// selecting element to store the message
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
            if((slotSpot.img1.innerText === slotSpot.img2.innerText) && (slotSpot.img2.innerText === slotSpot.img3.innerText) &&(slotSpot.img1.innerText === slotSpot.img3.innerText) ){
               if(bank >= 0 && bank <= 100){
                  counter += 1
               bank -= 10
               document.querySelector('#bank').innerText = bank;
               document.querySelector('#msg').innerText = "YOU WON!"

               }
               
            
            }else{
               counter += 1
               bank -= 10
               document.querySelector('#bank').innerText = bank;
               document.querySelector('#msg').innerText = "TRY AGAIN"
               if(bank === 0 ){ 
                  
                  document.querySelector('#bank').innerText = bank;
                  document.querySelector('#msg').innerText = "GAME OVER"
                  
               }
               
            }
            
         }

      },100)

   }


   
// function to reset game back to original bank amount also what element to store the info in.
function gameReset(){
   
   bank = 100
    counter = 0
    document.querySelector('#bank').innerText = bank
    
}






//where bank total is stored
let bankTotal = document.querySelector('#bank')

//which element restart button is stored
let restartButton = document.querySelector('#restart')

// which element spin button is stored
let spinButton = document.querySelector('#spin')

//when spin button is clicked spin img function runs
spinButton.addEventListener('click', spinNewImg)

//when restart button is clicked game reset fuction runs
restartButton.addEventListener('click', gameReset)



// need random function using math.floor & math.random
//init function (what starts the game)
//reset function 
// conditional into a game play function
//call get random imgs if all 3 images match with money in bank the player win
// if player reaches 0 in bank then player lose
// once player wins/lose alrert comes up with player wins or lose
