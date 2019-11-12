import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const DEFAULT_SECOND = 10;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  private _seconds = DEFAULT_SECOND;

  @Output() finish = new EventEmitter();

  @Input()
  set seconds(value: any) {
    if (isNaN(value)) {
      this._seconds = DEFAULT_SECOND;
    } else {
      this._seconds = value;
    }
  }
  get seconds() {
    return this._seconds;
  }

  interval: any;

  startTimer() {
    this.interval = setInterval( () => {

      if (this._seconds > 0) {
        this._seconds--;
      } else {
        this.stopTimer();
        this.finish.emit();
      }
    }, 1000 );
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.stopTimer();
    this._seconds = DEFAULT_SECOND;
  }

}
