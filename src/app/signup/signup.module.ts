import { NgModule }        from '@angular/core';
import { SharedModule }    from '../../shared/shared.module';
import { SignupComponent } from './signup.component';

@NgModule({

    declarations: [

        SignupComponent

    ],
    imports: [

        SharedModule

    ],

    entryComponents: [

        SignupComponent

    ]

})
export class SignupModule {
}
