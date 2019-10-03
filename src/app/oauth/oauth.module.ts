import { CommonModule }   from '@angular/common';
import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { OauthComponent } from './oauth.component';

@NgModule({

    declarations: [

        OauthComponent

    ],

    imports: [

        CommonModule,
        RouterModule.forChild([

            {

                path: 'oauth/callback',
                component: OauthComponent

            }

        ])

    ]

})
export class OauthModule {
}
