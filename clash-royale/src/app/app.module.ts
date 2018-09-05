import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ClanComponent } from './pages/clan/clan.component';
import { ClanService } from './pages/clan/clan.service';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    ClanComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    HttpClientModule
  ],
  providers: [ClanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
