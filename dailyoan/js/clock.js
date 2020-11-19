'use strict';

export function myClock() 
  {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }
myClock.prototype.run = function ()
  {
  setInterval(this.update.bind(this), 1000);
  };
myClock.prototype.update = function () 
  {
  this.updateTime(1);
  $('#hoursNow').text(this.hours + ":" + this.minutes);
  };
myClock.prototype.updateTime = function (secs) 
  {
  this.seconds+= secs;
 if (this.seconds >= 60)
  {
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60)
  {
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24)
  {
  this.hours = 0;
  }
};
