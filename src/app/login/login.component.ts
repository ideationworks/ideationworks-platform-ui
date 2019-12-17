import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../_lib/AuthenticationService';
import {ToastrService} from 'ngx-toastr';
import {NgxuxMatDialogService} from '@ngxux/ngxux-mat-dialog';
import {Router} from '@angular/router';

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

    public constructor(private authenticationService: AuthenticationService,
                       private toastrService: ToastrService,
                       private ngxuxMatDialogService: NgxuxMatDialogService,
                       private router: Router) {

    }

    public onSubmitClick() {

        this.toastrService.success('Welcome back!');

        this.ngxuxMatDialogService.close('login');

        this.router.navigate(['/ideas']);

        // this.authenticationService.login(this.formGroup.get('email').value, this.formGroup.get('password').value).subscribe(result => {

        //     console.log(result);

        // });

    }

}


