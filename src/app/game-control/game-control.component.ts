import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  interval: any;
  number: number = 0;
  @Output() gameStarted = new EventEmitter<number>();

  constructor() {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.gameStarted.emit(this.number++);
    }, 1000); // 1000 milliseconds = 1 second
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
