import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {

    public showForgot: boolean;

    public formGroup: FormGroup = new FormGroup({

        email: new FormControl('', [

            Validators.required,
            Validators.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)

        ]),

        password: new FormControl('', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(255)

        ]),

    });

    public constructor() {

    }


    onSubmitClick() {
        console.log(this.formGroup.value);
        console.log(this.formGroup.valid);
    }
}


