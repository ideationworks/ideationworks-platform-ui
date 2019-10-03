import { Component, OnInit }     from '@angular/core';
import { AuthenticationService } from '../_lib/AuthenticationService';
import { SignupDialogService }   from './signup/signup-dialog.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

    public constructor(private authenticationService: AuthenticationService,
                       private signupDialogService: SignupDialogService) {

    }

    public ngOnInit(): void {

        this.signupDialogService.open();

    }

}
