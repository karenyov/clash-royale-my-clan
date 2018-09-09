import { Component, OnInit } from '@angular/core';
import { ClanService } from './clan.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit {

  public isLoaded: boolean;
  public error: string;
  clan: any = [];

  constructor(private clanService: ClanService) { }

  ngOnInit() {
    this.isLoaded = false;
    this.getClan();
  }

  getClan() {
    this.clanService.getClan().subscribe(
      data => {
        this.clan = data;
        this.isLoaded = true;
      },
      err => {
        this.error = err.error.message;
        this.isLoaded = true;
      }
    );
  }

}
