import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
//import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
//import { ApiService } from './shared';
//import { routing } from './app.routing';

//import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
