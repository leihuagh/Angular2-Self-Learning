import { NgModule } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
    imports: [],
    exports: [ GreetingComponent],
    declarations: [GreetingComponent],
    providers: [],
    bootstrap: [GreetingComponent]
})
export class HomeModule{}