import {Injectable} from '@angular/core';
import {NgxuxMatDialogService, NgxuxMatDialogSettings} from '@ngxux/ngxux-mat-dialog';
import {PasswordComponent} from './password.component';

@Injectable({
    providedIn: 'root'
})
export class PasswordDialogService {

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    public open(): void {

        this.ngxuxMatDialogService.open(PasswordComponent, new NgxuxMatDialogSettings({

            id: 'password',
            title: 'Change your Password!',

            width: '320px',
            height: '530px',

            nextShow: true,
            nextLabel: 'Submit'

        }));

    }

    public close(): void {

        this.ngxuxMatDialogService.close('password');

    }

}
