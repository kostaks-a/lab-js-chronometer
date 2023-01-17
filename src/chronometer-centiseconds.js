class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback()
      }
      }, 10)
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 6000)
    return minutes
  }

  getSeconds() {
    const seconds = Math.floor(this.currentTime / 100 % 60)
    return seconds
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
  
   if (value < 10){
      return `0${value}`
    }
    else if (value >= 10){
      return  `${value}`
    }


  }

  stop() {
    clearInterval(this.intervalId)

  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minString = this.computeTwoDigitNumber(this.getMinutes())
    const secString = this.computeTwoDigitNumber(this.getSeconds())
    const centString = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${minString}:${secString}.${centString}`
  } 
}