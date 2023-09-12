class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  // ... your code goes here
    this.intervalId = setInterval(() => {
    this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
     return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
     return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
       
    let stringValue = value.toString();
    if (stringValue.length < 2) {
      stringValue = "0" + stringValue;
    }
    return stringValue;  
}

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const formattedMinutes = this.computeTwoDigitNumber(minutes);
    const formattedSeconds = this.computeTwoDigitNumber(seconds);

    return `${formattedMinutes}:${formattedSeconds}`;
  }

   getMinutes() {
    return Math.floor(this.currentTime / 60); 
  }
  getSeconds() {
    return this.currentTime % 60; 
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`; 
  
  }
}