

let slotImages = ['😍', '🤩', '😢'];

let bank = 100
document.querySelector('#bank').innerText = bank

function randomSlotImg() {
    
     const randomImg= Math.floor(Math.random() *3);
    
   return slotImages[randomImg]
   
}
//console.log(randomSlotImg())



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
// function spinNewImg(){
   
//       setTimeout(function(){

//          slotSpot.img1.innerText = randomSlotImg()
//          slotSpot.img2.innerText = randomSlotImg()
//          slotSpot.img3.innerText = randomSlotImg()
         
         
//          //console.log(counter)
         
            
//             if((slotSpot.img1.innerText === slotSpot.img2.innerText) && (slotSpot.img2.innerText === slotSpot.img3.innerText) &&(slotSpot.img1.innerText === slotSpot.img3.innerText) ){
//                if(bank >= 0 && bank <= 100){
//                   counter += 1
//                bank -= 10
//                document.querySelector('#bank').innerText = bank;
//                document.querySelector('#msg').innerText = "YOU WON!"

//                }
               
            
//             }else{
//                counter += 1
//                bank -= 10
//                document.querySelector('#bank').innerText = bank;
//                document.querySelector('#msg').innerText = "TRY AGAIN"
//                if(bank === 0 ){ 
                  
//                   document.querySelector('#bank').innerText = bank;
//                   document.querySelector('#msg').innerText = "GAME OVER"
                  
//                }
               
//             }

         

//       },100)

//    }
   

function gameReset(){
   
   bank = 100
    counter = 0
    document.querySelector('#bank').innerText = bank
    
}







let bankTotal = document.querySelector('#bank')

let restartButton = document.querySelector('#restart')
let spinButton = document.querySelector('#spin')


spinButton.addEventListener('click', spinNewImg)
restartButton.addEventListener('click', gameReset)
//betButton.addEventListener('click', placeBet)


// need random function using math.floor & math.random
//init function (what starts the game)
//reset function 
// conditional into a game play function
//call get random imgs if all 3 images match with money in bank the player win
// if player reaches 0 in bank then player lose
// once player wins/lose alrert comes up with player wins or lose
