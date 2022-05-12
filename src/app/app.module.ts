import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeatMapModule} from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeatMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
