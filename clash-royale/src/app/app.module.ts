import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ClanComponent } from './pages/clan/clan.component';
import { ClanService } from './pages/clan/clan.service';
import { PlayerComponent } from './pages/player/player.component';
import { LoaderComponent } from './shared/components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    ClanComponent,
    LoaderComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    ClanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
