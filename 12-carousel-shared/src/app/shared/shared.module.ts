import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryCardComponent } from './category/category-card.component';
import { CategorySlideComponent } from './category/category-slide.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [],
    exports: [
        NavbarComponent,
        CategoryCardComponent,
        CategorySlideComponent,
        FooterComponent
    ],
    declarations: [
        NavbarComponent,
        CategoryCardComponent,
        CategorySlideComponent,
        FooterComponent
    ]
})
export class SharedModule {}
