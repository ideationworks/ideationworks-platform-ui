import { Injectable } from '@angular/core';
import { NgxuxMatDialogService, NgxuxMatDialogSettings } from '@ngxux/ngxux-mat-dialog';
import { ResetpasswordComponent } from "./resetpassword.component";

@Injectable({
    providedIn: 'root'
})
export class ResetPasswordDialogService {

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    public open(): void {

        this.ngxuxMatDialogService.open(ResetpasswordComponent, new NgxuxMatDialogSettings({

            id: 'resetPassword',
            title: 'Signup for your free account!',

            width: '320px',
            height: '530px',

            nextShow: true,
            nextLabel: 'Reset Password'

        }));

    }

    public close(): void {

        this.ngxuxMatDialogService.close('resetPassword');

    }

}
