
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
// finds circle element
const circle = document.querySelector('circle');

// calculates circle perimeter
const perimeter = circle.getAttribute('r') * 2 * Math.PI;

// set dasharray value on circcle
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

// create new instance of Timer //
const timer = new Timer(durationInput, startButton, pauseButton, {
   onStart(totalDuration){
      duration = totalDuration;
   },
   onTick(timeRemaining){
      circle.setAttribute('stroke-dashoffset', 
      perimeter * timeRemaining / duration - perimeter);
      
   },
   onComplete(){
      console.log("Timer is complete");
   }
});
// Timer class automatically sets up the event listener //



