import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public isLoaded: boolean;
  public error: string;
  player: any = [];

  constructor() { }

  ngOnInit() {
    this.isLoaded = false;
  }

}
