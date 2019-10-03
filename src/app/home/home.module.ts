import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { SharedModule }  from '../../shared/shared.module';
import { IdeasModule }   from '../ideas/ideas.module';
import { HomeComponent } from './home.component';

@NgModule({

    declarations: [

        HomeComponent

    ],

    imports: [

        CommonModule,
        IdeasModule,
        RouterModule.forChild([

            {

                path: '',
                component: HomeComponent

            }

        ]),
        SharedModule

    ]

})
export class HomeModule {
}
