class Timer {
   constructor(durationInput, startButton, pauseButton, callbacks){
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
      
      // checks to see if callbacks were provided
      if(callbacks){
         this.onStart = callbacks.onStart; // saves a reference to the callack passed in
         this.onTick = callbacks.onTick;
         this.onComplete = callbacks.onComplete;

      }
      
      // listens for the click on the play button
      // when clicked, call start method
      this.startButton.addEventListener('click', this.start);
      this.pauseButton.addEventListener('click', this.pause);
   }

   start = () => {
      // checks to see if onStart was defined
      if(this.onStart){
         this.onStart(this.timeRemaining);
      }
      this.tick();
      // takes in reference to the function to invoke
      // 2nd parameter is how often to run that function
      // will run this.tick every second
      this.interval = setInterval(this.tick, 50);
   };

   pause = () => {
      clearInterval(this.interval);
   };

   tick = () => {
      if(this.timeRemaining <= 0) {
         this.pause();
         if(this.onComplete){
            this.onComplete();
         }
      } else {
         this.timeRemaining = this.timeRemaining - 0.05;
         if(this.onTick){
            this.onTick(this.timeRemaining);
         }
      }
   };

   get timeRemaining(){
      return parseFloat(this.durationInput.value);
   }

   set timeRemaining(time){
      this.durationInput.value = time.toFixed(2);
   }
}