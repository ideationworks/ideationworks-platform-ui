import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ResetPasswordService } from "./reset-password.service";

@Component({
    selector: 'app-resetpassword',
    templateUrl: './resetpassword.component.html',
    styleUrls: [ './resetpassword.component.scss' ]
})
export class ResetpasswordComponent {

    public constructor(
        private resetPasswordService: ResetPasswordService) {

    }


    public formGroup: FormGroup = new FormGroup({

        password: new FormControl('', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(255)

        ]),

        confirmPassword: new FormControl('', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(255)

        ]),

    });

    public onSubmitClick() {

        this.resetPasswordService.chaChing('Good job captain, you changed your password!');

    }


}
