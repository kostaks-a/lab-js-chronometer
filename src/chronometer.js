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
    }, 1000)
    
  }


  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    const secondsRem = this.currentTime % 60
    return secondsRem
  }

  computeTwoDigitNumber(value) {
    let string = ``
    if (value < 10){
      string = `0${value}`
      return string
    }
    else if (value >= 10){
      let stringNum = `${value}`
      return stringNum
    }

  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minutes = this.getMinutes()
    const seconds = this.getSeconds()
    const minString = this.computeTwoDigitNumber()
    const secString = this.computeTwoDigitNumber(seconds)
    return `${minString}:${secString}`
    

  }
}
