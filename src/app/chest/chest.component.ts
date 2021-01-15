import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

import animations from './chest.animations';


@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.css'],
  animations: animations
})
export class ChestComponent implements OnInit {
  isOpen: Boolean = false;
  animating: Boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  toggle(): void {
    if (!this.animating){
      this.isOpen = !this.isOpen;
    }
  }

  animationDone(event: any): void {
    this.animating = true;
    setTimeout(() => {
      if (event.toState == 'opened_top') this.dialog.open(DialogComponent, {});
      this.animating = false;
    }, 600);
  }
}

@Component({
  selector: 'chest-dialog',
  templateUrl: './chest.dialog.html'
})
export class DialogComponent {}
