
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// create new instance of Timer //
const timer = new Timer(durationInput, startButton, pauseButton, {
   onStart(){
      console.log("Timer Started");
   },
   onTick(){
      console.log("Timer just ticked down");
   },
   onComplete(){
      console.log("Timer is complete");
   }
});
// Timer class automatically sets up the event listener //



