import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CategoryCardComponent} from './category-card.component';
import {CategorySlideComponent} from './category-slide.component';


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [
        CategoryCardComponent,
        CategorySlideComponent
    ],
    exports: [
        CategoryCardComponent,
        CategorySlideComponent
    ],
    providers: []
})
export class CategoryModule {}
