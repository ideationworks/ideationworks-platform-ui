import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { CategoryComponent }       from './category.component';
import { SharedModule }            from '../../shared/shared.module';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { RouterModule }            from '@angular/router';

@NgModule({
    declarations: [ CategoryComponent, CategoryCreateComponent ],
    imports: [
        CommonModule,
        SharedModule,

        RouterModule.forChild([
            {

                path: 'categories',
                component: CategoryComponent

            }

        ])
    ],

    entryComponents: [
        CategoryCreateComponent
    ]

})
export class CategoryModule {
}
