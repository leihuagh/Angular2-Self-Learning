import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryCardComponent } from './category/category-card.component';
import { CategorySlideComponent } from './category/category-slide.component';

@NgModule({
    imports: [],
    exports: [
        NavbarComponent,
        CategoryCardComponent,
        CategorySlideComponent
    ],
    declarations: [
        NavbarComponent,
        CategoryCardComponent,
        CategorySlideComponent
    ]
})
export class SharedModule {}
