import {Component} from '@angular/core';
import {AuthenticationService} from '../../../_lib/AuthenticationService';
import {PostDialogService} from '../../ideas/post/post-dialog.service';
import {SignupDialogService} from '../../signup/signup-dialog.service';
import {LoginDialogService} from '../../login/login-dialog.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public constructor(public authenticationService: AuthenticationService,
                       public postDialogService: PostDialogService,
                       public signupDialogService: SignupDialogService,
                       public loginDialogService: LoginDialogService,
    ) {

    }

}
