
//detecting button press
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++)
{
    
document.querySelectorAll("button")[i].addEventListener("click",function()
{
     //what to do when click gets detected
     var buttonInnerHTML=this.innerHTML;
     makesound(buttonInnerHTML);
     //for flashing that key when we press that letter button
     buttonAnimation(buttonInnerHTML);

}
     
);
}

//detecting keyboard press

document.addEventListener("keypress",function(event)
{
   var key1=event.key;
   makesound(key1);
   //for flashing that key when it got pressed on keyboard
   buttonAnimation(event.key);

});

function makesound(key)
{
    switch(key)
    {
       case "w":
           var tom1=new Audio("sounds/tom-1.mp3");
           tom1.play();
           break;
       case "a":
           var tom2=new Audio("sounds/tom-2.mp3");
           tom2.play();
           break;
       case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
       case "d":
           var tom4=new Audio("sounds/tom-4.mp3");
           tom4.play();
           break;
       case "j":
           var snare=new Audio("sounds/snare.mp3");
           snare.play();
           break;
       case "k":
           var crash=new Audio("sounds/crash.mp3");
           crash.play();
           break;
       case "l":
           var kick=new Audio("sounds/kick-bass.mp3");
           kick.play();
           break;
       default:
           console.log(buttonInnerHTML);
    }

}

function buttonAnimation(currentKey)
{
    //This is the button that we are going to change its style
   var activeButton=document.querySelector("."+currentKey);
   /*we have already created a class that has code 
   required for flashing an object*/
   /*so now we will add that class to our activeButton*/
   activeButton.classList.add("pressed"); // this add blurness to the button which we pressed
   /*once we click that button that effect gets applied and
    we are unable to remove it , so in order to remove it write this code*/
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100);


}