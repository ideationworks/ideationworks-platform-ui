import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent {

    public formGroup = new FormGroup({

        email: new FormControl('', [

            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(255)

        ]),

        displayName: new FormControl('', [

            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(255)

        ]),

        password: new FormControl('', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(255)

        ]),

        subscribeNewsletter: new FormControl(true),
        subscribeIdeas: new FormControl(true),

    });

    public constructor() {

    }


}
