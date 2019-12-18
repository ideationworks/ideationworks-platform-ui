import {Injectable} from '@angular/core';
import {NgxuxMatDialogService, NgxuxMatDialogSettings} from '@ngxux/ngxux-mat-dialog';
import {LoginComponent} from './login.component';

@Injectable({
    providedIn: 'root'
})
export class LoginDialogService {

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    public open(): void {

        this.ngxuxMatDialogService.open(LoginComponent, new NgxuxMatDialogSettings({

            id: 'login',
            title: 'Login!',

            width: '320px',
            height: '480px',

            nextShow: true,
            nextLabel: 'Login'

        }));

    }

    public close(): void {

        this.ngxuxMatDialogService.close('signup');

    }

}
