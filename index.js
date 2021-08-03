class Timer {
   constructor(durationInput, startButton, pauseButton){
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
      
      // listens for the click on the play button
      // when clicked, call start method
      this.startButton.addEventListener('click', this.start);
   }

   start(){
      console.log("time to start timer");
   }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// create new instance of Timer //
const timer = new Timer(durationInput, startButton, pauseButton);
// Timer class automatically sets up the event listener //