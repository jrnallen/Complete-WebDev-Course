var playing = false;
var score;
//if we click on the start/reset button
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing == true){
        location.reload(); //reload page
    }
    else{//if we are not playing
        score = 0; //set score to 0
        document.getElementById("scorevalue").innerHTML = score;
        
        //show countdown box
        document.getElementById("timeremaining").style.display = "block";
        
        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
    }
    
}
  
      
  
      
      
      //reduce time by 1 every second
      //check if there is time left
          //yes---> continue
          //no----> game over
      //change button to reset
      //generate new Q&A

//if we click on answer box
   //if we are playing
      //correct?
         //yes
            //increase score by 1
            //show correct box
            //genereate new Q&A

         //no
            //show try again box

