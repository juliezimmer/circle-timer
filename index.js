class Timer {
   constructor(durationInput, startButton, pauseButton){
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
      
      // listens for the click on the play button
      // when clicked, call start method
      this.startButton.addEventListener('click', this.start);
      this.pauseButton.addEventListener('click', this.pause);
   }

   start = () => {
      this.tick();
      // takes in reference to the function to invoke
      // 2nd parameter is how often to run that function
      // will run this.tick every second
      this.interval = setInterval(this.tick, 1000);
   };

   pause = () => {
      clearInterval(this.interval);
   };

   tick = () => {
      this.timeRemaining = this.timeRemaining - 1; 
   };

   get timeRemaining(){
      return parseFloat(this.durationInput.value);
   }

   set timeRemaining(time){
      this.durationInput.value = time;
   }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// create new instance of Timer //
const timer = new Timer(durationInput, startButton, pauseButton);
// Timer class automatically sets up the event listener //



