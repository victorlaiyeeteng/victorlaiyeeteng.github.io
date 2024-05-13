import { Component } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-goat',
  templateUrl: './goat.component.html',
  styleUrls: ['./goat.component.css']
})
export class GoatComponent {

  constructor() { }

  launchConfetti() {
    confetti({
      particleCount: 200, 
      spread:80, 
      origin: { y: 0.6 }
    })
  }

  launchWrongConfetti() {
    confetti({
      particleCount: 80, 
      spread:40, 
      origin: { y: 0.6 }, 
      colors: ['#c70b0b', '#3d0808', '#fa7d04', '#640303']
    })
  }

  currentResponse: string = '';
  
  answer(response: boolean): void {
    this.currentResponse = response ? 'correct' : 'wrong';
    if (response) {
      this.launchConfetti();
    } else {
      this.launchWrongConfetti();
    }
  }
}
