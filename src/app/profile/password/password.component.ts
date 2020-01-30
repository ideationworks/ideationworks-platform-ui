import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgxuxMatDialogService} from '@ngxux/ngxux-mat-dialog';
import {Router} from '@angular/router';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

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

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService,
                       private router: Router) {

    }

    public onSubmitClick() {

        this.ngxuxMatDialogService.close('password');

        this.router.navigate(['/profile/']);

        // this.authenticationService.login(this.formGroup.get('email').value, this.formGroup.get('password').value).subscribe(result => {

        //     console.log(result);

        // });

    }

    ngOnInit(): void {
    }

}
