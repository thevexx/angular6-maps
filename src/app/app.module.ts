import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnuFywtDRLi8m3NW4p0zdX5mVmpY4-MHE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
