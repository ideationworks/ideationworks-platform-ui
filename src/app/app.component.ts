import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_lib/AuthenticationService';
import { PostDialogService } from './ideas/post/post-dialog.service';
import { ResetPasswordDialogService } from "./profile/resetpassword/reset-password-dialog";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

    public constructor(private authenticationService: AuthenticationService,
                       private resetPasswordDialogService: ResetPasswordDialogService,
                       private postDialogService: PostDialogService) {

    }

    public ngOnInit(): void {

        this.resetPasswordDialogService.open();
        // this.postDialogService.open();

    }

}
