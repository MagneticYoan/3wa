'use strict';

class time {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }
    
    setTime(second, minute, hour) {
        this.seconds = second;
        this.minutes = minute;
        this.hours = hour;
    }
    
    addSeconds (seconds) {
        /* if ((this.seconds + seconds) >= 60) {
            console.log('premier if');
            let totalSeconds =  this.seconds + seconds;
            this.seconds = totalSeconds%60;
            let extraSecondInMinute = Math.floor(totalSeconds/60)%60;
            console.log(tooMuchSeconds);
            
            if (this.minutes + extraSecondInMinute < 60) {
                this.minutes += Math.floor(seconds/60);
                console.log('deuxieme if');
            }
            else if (this.minutes + extraSecondInMinute >= 60 ){
                console.log('3e if');
                let totalMinutes = this.minutes + extraSecondInMinute;
                this.minutes = totalMinutes%60;
                let tooMuchMinutes = Math.floor(totalMinutes/60)%60;
                this.hours += tooMuchMinutes;
            }
        }
        
        else {
            this.seconds += seconds;
        }*/
        
        
        let fullActualTime = this.seconds + (this.minutes * 60) + (this.hours * 60 * 60);
        let fullSeconds = fullActualTime + seconds;
        this.seconds = fullSeconds%60;
        fullSeconds -= this.seconds;
        this.minutes = (fullSeconds/60)%60;
        fullSeconds -= this.minutes * 60;
        this.hours = fullSeconds / (60 *60);
        
    }
}

let myTime = new time();

console.log(myTime);

myTime.setTime(59, 50, 20);

console.log(myTime);

myTime.addSeconds(4000);

console.log(myTime);


