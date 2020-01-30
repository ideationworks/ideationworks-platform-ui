import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {PasswordComponent} from './password/password.component';
import {ProfileComponent} from './profile.component';

@NgModule({

    declarations: [

        ProfileComponent,
        PasswordComponent

    ],

    imports: [

        CommonModule,
        SharedModule,
        RouterModule.forChild([

            {

                path: 'profile',
                component: ProfileComponent,

                children: [

                    {

                        path: 'password',
                        component: PasswordComponent

                    }

                ]

            }

        ])

    ],
    entryComponents: [

        PasswordComponent,

    ]

})
export class ProfileModule {
}
