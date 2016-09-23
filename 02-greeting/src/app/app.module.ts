import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { HomeModule } from './home/greeting.module';
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, HomeModule],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
